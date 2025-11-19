import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { programAPI, courseAPI, majorAPI } from '@/services/api'
import toast from 'react-hot-toast'

const CURRENT_YEAR = new Date().getFullYear()
const COURSE_TYPE_OPTIONS = [
  { value: 'Bắt buộc', label: 'Bắt buộc' },
  { value: 'Tự chọn', label: 'Tự chọn' },
  { value: 'Tự do', label: 'Tự do' }
]

function ProgramManagement() {
  const navigate = useNavigate()
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(false)
  const [courses, setCourses] = useState([])
  const [majors, setMajors] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('create')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [startYearFilter, setStartYearFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const [modalForm, setModalForm] = useState({
    program_code: '',
    program_name: '',
    description: '',
    start_date: '',
    end_date: '',
    start_year: CURRENT_YEAR,
    is_active: true,
    major_id: '',
    knowledge_block_ids: [],
    course_ids: [],
    total_credits: ''
  })

  const parseCreditsValue = (value) => {
    if (value === null || value === undefined || value === '') return null
    const numberValue = Number(value)
    if (Number.isNaN(numberValue) || numberValue < 0) return null
    return numberValue
  }

  const fetchPrograms = async () => {
    try {
      setLoading(true)
      const res = await programAPI.getAll()
      const normalized = (res.data || []).map(item => {
        // Debug: Log Major data
        if (item.major_id && !item.Major) {
          console.warn(`[ProgramManagement] Program ${item.program_code} has major_id=${item.major_id} but no Major object`, item);
        }
        return {
          ...item,
          KnowledgeBlocks: Array.isArray(item.KnowledgeBlocks) ? item.KnowledgeBlocks : [],
          Courses: Array.isArray(item.Courses) ? item.Courses : [],
          Major: item.Major || null, // Ensure Major is preserved (can be null if not set or not found)
           TuitionYears: Array.isArray(item.TuitionYears)
             ? item.TuitionYears.sort((a, b) => b.year - a.year)
             : [],
          total_credits: parseCreditsValue(item.total_credits)
        }
      })
      setPrograms(normalized)
    } catch (e) {
      toast.error(e.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchCourses = async () => {
    try {
      const res = await courseAPI.getAll()
      setCourses(res.data || [])
    } catch (e) {
      toast.error('Không thể tải danh sách học phần')
    }
  }

  const fetchMajors = async () => {
    try {
      const res = await majorAPI.getAll()
      setMajors(res.data || [])
    } catch (e) {
      toast.error('Không thể tải danh sách ngành học')
    }
  }

  useEffect(() => {
    fetchPrograms()
    fetchCourses()
    fetchMajors()
  }, [])

  const filteredPrograms = programs.filter((program) => {
    const keyword = searchKeyword.trim().toLowerCase()
    const matchKeyword =
      !keyword ||
      (program.program_code && program.program_code.toLowerCase().includes(keyword)) ||
      (program.program_name && program.program_name.toLowerCase().includes(keyword))

    const matchYear =
      !startYearFilter ||
      String(program.start_year || '').includes(startYearFilter.trim())

    const matchStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && program.is_active) ||
      (statusFilter === 'inactive' && !program.is_active)

    return matchKeyword && matchYear && matchStatus
  })

  const buildProgramFormFromRecord = (record, overrides = {}) => {
    if (!record) {
      return {
        program_code: '',
        program_name: '',
        description: '',
        start_date: '',
        end_date: '',
        start_year: CURRENT_YEAR,
        is_active: true,
        major_id: '',
        knowledge_block_ids: [],
        course_ids: [],
        total_credits: ''
      }
    }
    const majorId = record.major_id || (record.Major && record.Major.id) || null
    const startYear = record.start_year || (record.start_date ? new Date(record.start_date).getFullYear() : CURRENT_YEAR)
    return {
      id: record.id,
      knowledge_block_ids: Array.isArray(record.KnowledgeBlocks) ? record.KnowledgeBlocks.map(kb => kb.id) : [],
      course_ids: Array.isArray(record.Courses) ? record.Courses.map(course => course.id) : [],
      program_code: record.program_code || '',
      program_name: record.program_name || '',
      start_date: record.start_date || '',
      end_date: record.end_date || '',
      description: record.description || '',
      is_active: record.is_active !== undefined ? record.is_active : true,
      major_id: majorId ? String(majorId) : '',
      start_year: startYear,
      total_credits: (() => {
        const parsed = parseCreditsValue(record.total_credits)
        return parsed === null ? '' : parsed
      })(),
      ...overrides
    }
  }

  const openCreateModal = () => {
    setModalType('create')
    setModalForm(buildProgramFormFromRecord(null))
    setShowModal(true)
  }

  const openEditModal = (p) => {
    setModalType('edit')
    setModalForm(buildProgramFormFromRecord(p))
    setShowModal(true)
  }

  const openCloneModal = (p) => {
    const suffixCode = p.program_code ? `${p.program_code}-COPY` : ''
    const suffixName = p.program_name ? `${p.program_name} (Copy)` : ''
    const form = buildProgramFormFromRecord(p, {
      id: undefined,
      program_code: suffixCode,
      program_name: suffixName
    })
    setModalType('clone')
    setModalForm(form)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openDetailModal = (programId) => {
    navigate(`/chuong-trinh/${programId}`)
  }

  const handleModalChange = (e) => {
    const { name, value, type, checked } = e.target

    if (name === 'start_year') {
      const numeric = value === ''
        ? ''
        : Math.min(Math.max(Number(value) || CURRENT_YEAR, 2000), CURRENT_YEAR)
      setModalForm(prev => ({
        ...prev,
        start_year: numeric
      }))
      return
    }

    if (name === 'knowledge_block_ids' || name === 'course_ids') {
      // handled by checkbox below
    } else {
      setModalForm(prev => ({
        ...prev,
        [name]: type === 'checkbox'
          ? checked
          : type === 'number'
          ? (value === '' ? '' : Number(value))
          : value,
      }))
    }
  }

  const handleModalSubmit = async (e) => {
    e.preventDefault()
    const trimmedCode = modalForm.program_code.trim()
    const trimmedName = modalForm.program_name.trim()

    if (!trimmedCode || !trimmedName) {
      toast.error('Mã chương trình đào tạo và tên chương trình đào tạo là bắt buộc')
      return
    }
    try {
      const payload = {
        program_code: trimmedCode,
        program_name: trimmedName,
        description: modalForm.description,
        start_date: modalForm.start_date || '',
        end_date: modalForm.end_date || '',
        is_active: Boolean(modalForm.is_active),
        major_id: modalForm.major_id ? Number(modalForm.major_id) : null,
        knowledge_block_ids: Array.isArray(modalForm.knowledge_block_ids)
          ? modalForm.knowledge_block_ids.slice()
          : [],
        course_ids: Array.isArray(modalForm.course_ids)
          ? modalForm.course_ids.slice()
          : [],
        total_credits: modalForm.total_credits,
        start_year: modalForm.start_year || CURRENT_YEAR
      }

      if (modalType === 'create' || modalType === 'clone') {
        await programAPI.create(payload)
        toast.success(modalType === 'clone' ? 'Sao chép chương trình đào tạo thành công' : 'Tạo chương trình đào tạo thành công')
      } else {
        await programAPI.update(modalForm.id, payload)
        toast.success('Cập nhật chương trình đào tạo thành công')
      }
      closeModal()
      fetchPrograms()
    } catch (e) {
      toast.error(e.message)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Xóa chương trình đào tạo này?')) return
    try {
      await programAPI.delete(id)
      toast.success('Đã xóa')
      fetchPrograms()
    } catch (e) {
      toast.error(e.message)
    }
  }


  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-2xl font-semibold">Quản lý chương trình đào tạo</h1>
        <button onClick={openCreateModal} className="btn-primary flex items-center space-x-2">
          <span>+ Thêm chương trình đào tạo</span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Tìm theo mã hoặc tên chương trình..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Lọc năm bắt đầu..."
          value={startYearFilter}
          onChange={(e) => setStartYearFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full md:w-48"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full md:w-48"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="inactive">Ngừng hoạt động</option>
        </select>
      </div>
      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {modalType === 'create' && 'Thêm chương trình đào tạo'}
                {modalType === 'edit' && 'Chỉnh sửa chương trình đào tạo'}
                {modalType === 'clone' && 'Sao chép chương trình đào tạo'}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <form onSubmit={handleModalSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Mã chương trình đào tạo *</label>
                  <input
                    type="text"
                    name="program_code"
                    value={modalForm.program_code}
                    onChange={handleModalChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tên chương trình đào tạo *</label>
                  <input
                    type="text"
                    name="program_name"
                    value={modalForm.program_name}
                    onChange={handleModalChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <textarea
                  name="description"
                  rows={3}
                  value={modalForm.description}
                  onChange={handleModalChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thuộc ngành</label>
                <select
                  name="major_id"
                  value={modalForm.major_id}
                  onChange={handleModalChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">-- Chọn ngành học --</option>
                  {majors.map(major => (
                    <option key={major.id} value={major.id}>
                      {major.major_code} - {major.major_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Ngày bắt đầu</label>
                  <input
                    type="date"
                    name="start_date"
                    value={modalForm.start_date}
                    onChange={handleModalChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Ngày kết thúc</label>
                  <input
                    type="date"
                    name="end_date"
                    value={modalForm.end_date}
                    onChange={handleModalChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Năm bắt đầu chương trình *</label>
                  <input
                    type="number"
                    name="start_year"
                    min={2000}
                    max={CURRENT_YEAR}
                    value={modalForm.start_year}
                    onChange={handleModalChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tổng số tín chỉ</label>
                  <input
                    type="number"
                    name="total_credits"
                    min={0}
                    step={1}
                    value={modalForm.total_credits}
                    onChange={handleModalChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={modalForm.is_active}
                    onChange={handleModalChange}
                  />
                  <span>Hoạt động</span>
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {modalType === 'create' && 'Tạo mới'}
                  {modalType === 'edit' && 'Lưu thay đổi'}
                  {modalType === 'clone' && 'Sao chép'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Program List Table */}
      <div className="bg-white shadow rounded">
        <div className="p-4 border-b font-medium">Danh sách chương trình đào tạo</div>
        <div className="p-4 overflow-x-auto">
          {loading ? (
            <div>Đang tải...</div>
          ) : (
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Mã</th>
                  <th className="p-2">Tên chương trình đào tạo</th>
                  <th className="p-2">Hành động</th>
                  <th className="p-2">Ngành học</th>
                  <th className="p-2">Năm bắt đầu</th>
                  <th className="p-2">Tổng tín chỉ</th>
                  <th className="p-2">Ngày bắt đầu</th>
                  <th className="p-2">Ngày kết thúc</th>
                  <th className="p-2">Trạng thái</th>
                  <th className="p-2">Quản lý</th>
                </tr>
              </thead>
              <tbody>
                {filteredPrograms.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="p-2">{p.program_code}</td>
                    <td className="p-2">{p.program_name}</td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => openDetailModal(p.id)}
                          className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                          Xem chi tiết
                        </button>
                        <button
                          onClick={() => openCloneModal(p)}
                          className="px-3 py-1.5 rounded-lg border border-blue-200 text-sm font-medium text-blue-700 hover:bg-blue-50 transition"
                        >
                          Sao chép
                        </button>
                      </div>
                    </td>
                    <td className="p-2">
                      {p.Major ? (
                        <span className="text-gray-800" title={`ID: ${p.Major.id}`}>
                          {p.Major.major_code} - {p.Major.major_name}
                        </span>
                      ) : p.major_id ? (
                        <span className="text-orange-600" title={`major_id=${p.major_id} nhưng không tìm thấy thông tin ngành học. Có thể ngành học đã bị xóa.`}>
                          ID: {p.major_id} (Không tìm thấy)
                        </span>
                      ) : (
                        <span className="text-gray-400" title="Chưa gán ngành học">-</span>
                      )}
                    </td>
                  <td className="p-2">{p.start_year || '-'}</td>
                    <td className="p-2">{p.total_credits ?? '-'}</td>
                    <td className="p-2">{p.start_date || '-'}</td>
                    <td className="p-2">{p.end_date || '-'}</td>
                    <td className="p-2">{p.is_active ? 'Active' : 'Inactive'}</td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-3">
                        <button onClick={() => openEditModal(p)} className="text-blue-600 hover:underline">Sửa</button>
                        <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">Xóa</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProgramManagement
