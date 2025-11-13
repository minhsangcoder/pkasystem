import React, { useEffect, useState } from 'react'
import { programAPI, knowledgeBlockAPI, courseAPI, majorAPI } from '@/services/api'
import toast from 'react-hot-toast'

function ProgramManagement() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(false)
  const [knowledgeBlocks, setKnowledgeBlocks] = useState([])
  const [courses, setCourses] = useState([])
  const [majors, setMajors] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('create')
  const [courseSearch, setCourseSearch] = useState('')
  const [modalForm, setModalForm] = useState({
    program_code: '',
    program_name: '',
    description: '',
    start_date: '',
    end_date: '',
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

  const fetchKnowledgeBlocks = async () => {
    try {
      const res = await knowledgeBlockAPI.getAll()
      setKnowledgeBlocks(res.data || [])
    } catch (e) {
      toast.error('Không thể tải khối kiến thức')
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
    fetchKnowledgeBlocks()
    fetchCourses()
    fetchMajors()
  }, [])

  const openCreateModal = () => {
    setModalType('create')
    setCourseSearch('')
    setModalForm({
      program_code: '',
      program_name: '',
      description: '',
      start_date: '',
      end_date: '',
      is_active: true,
      major_id: '',
      knowledge_block_ids: [],
      course_ids: [],
      total_credits: ''
    })
    setShowModal(true)
  }

  const openEditModal = (p) => {
    setModalType('edit')
    setCourseSearch('')
    // Get major_id from either direct field or Major association
    const majorId = p.major_id || (p.Major && p.Major.id) || null
    // Debug logging
    console.log('[openEditModal] Program data:', {
      id: p.id,
      program_code: p.program_code,
      major_id: p.major_id,
      Major: p.Major,
      resolvedMajorId: majorId
    })
    setModalForm({
      id: p.id,
      knowledge_block_ids: Array.isArray(p.KnowledgeBlocks) ? p.KnowledgeBlocks.map(kb => kb.id) : [],
      course_ids: Array.isArray(p.Courses) ? p.Courses.map(course => course.id) : [],
      program_code: p.program_code || '',
      program_name: p.program_name || '',
      start_date: p.start_date || '',
      end_date: p.end_date || '',
      description: p.description || '',
      is_active: p.is_active !== undefined ? p.is_active : true,
      major_id: majorId ? String(majorId) : '',
      total_credits: (() => {
        const parsed = parseCreditsValue(p.total_credits)
        return parsed === null ? '' : parsed
      })()
    })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setCourseSearch('')
  }

  const handleModalChange = (e) => {
    const { name, value, type, checked } = e.target
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

  const handleKBCheckbox = (id, checked) => {
    setModalForm(prev => {
      let ids = prev.knowledge_block_ids.slice()
      if (checked) {
        if (!ids.includes(id)) ids.push(id)
      } else {
        ids = ids.filter(kid => kid !== id)
      }
      return { ...prev, knowledge_block_ids: ids }
    })
  }

  const handleCourseCheckbox = (id, checked) => {
    setModalForm(prev => {
      let ids = prev.course_ids.slice()
      if (checked) {
        if (!ids.includes(id)) ids.push(id)
      } else {
        ids = ids.filter(cid => cid !== id)
      }
      return { ...prev, course_ids: ids }
    })
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
      }

      if (modalType === 'create') {
        await programAPI.create(payload)
        toast.success('Tạo chương trình đào tạo thành công')
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

  const normalizedCourseSearch = courseSearch.trim().toLowerCase()
  const filteredCourses = courses
    .slice()
    .filter(course => {
      if (!normalizedCourseSearch) return true
      const keyword = `${course.course_name ?? ''} ${course.course_code ?? ''}`.toLowerCase()
      return keyword.includes(normalizedCourseSearch)
    })
    .sort((a, b) => (a.course_name || '').localeCompare(b.course_name || '', 'vi', { sensitivity: 'base' }))

  const selectedCourseDetails = modalForm.course_ids
    .map(id => courses.find(course => course.id === id))
    .filter(Boolean)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Quản lý chương trình đào tạo</h1>
        <button onClick={openCreateModal} className="btn-primary flex items-center space-x-2">
          <span>+ Thêm chương trình đào tạo</span>
        </button>
      </div>
      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{modalType === 'create' ? 'Thêm chương trình đào tạo' : 'Chỉnh sửa chương trình đào tạo'}</h2>
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
              <div>
                <label className="block text-sm font-medium mb-1">Khối kiến thức</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {knowledgeBlocks.map(b => (
                    <label key={b.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={modalForm.knowledge_block_ids.includes(b.id)}
                        onChange={e => handleKBCheckbox(b.id, e.target.checked)}
                      />
                      {b.block_name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="block text-sm font-medium">Học phần</label>
                  <input
                    type="text"
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    placeholder="Tìm kiếm học phần theo tên hoặc mã..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-52 overflow-y-auto border border-gray-200 rounded-lg p-3">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                      <label key={course.id} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={modalForm.course_ids.includes(course.id)}
                          onChange={(e) => handleCourseCheckbox(course.id, e.target.checked)}
                        />
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">
                            {course.course_name}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-2">
                            <span>
                              {course.course_code ?? '---'}
                              {course.total_credits ? ` · ${course.total_credits} TC` : ''}
                            </span>
                            {course.is_active === false && (
                              <span className="text-red-500 font-medium">Ngưng</span>
                            )}
                          </span>
                        </div>
                      </label>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500 italic">Không tìm thấy học phần phù hợp</span>
                  )}
                </div>
                {selectedCourseDetails.length > 0 && (
                  <div className="space-y-2">
                    <span className="block text-sm font-medium text-gray-700">Học phần đã chọn:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourseDetails.map(course => (
                        <button
                          key={course.id}
                          type="button"
                          onClick={() => handleCourseCheckbox(course.id, false)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                          title="Bỏ chọn học phần này"
                        >
                          <span>{course.course_name}</span>
                          <span className="text-xs text-blue-500 bg-white/70 rounded-full px-2 py-0.5">
                            {course.course_code ?? '---'}
                          </span>
                          {course.total_credits ? (
                            <span className="text-xs text-blue-500 bg-white/70 rounded-full px-2 py-0.5">
                              {course.total_credits} TC
                            </span>
                          ) : null}
                          {course.is_active === false && (
                            <span className="text-xs text-red-500 bg-white/70 rounded-full px-2 py-0.5">
                              Ngưng
                            </span>
                          )}
                          <span className="text-xs text-blue-500">✕</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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
                  {modalType === 'create' ? 'Tạo mới' : 'Lưu thay đổi'}
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
                  <th className="p-2">Ngành học</th>
                  <th className="p-2">Tổng tín chỉ</th>
                  <th className="p-2">Ngày bắt đầu</th>
                  <th className="p-2">Ngày kết thúc</th>
                  <th className="p-2">Trạng thái</th>
                  <th className="p-2">Khối kiến thức</th>
                  <th className="p-2">Học phần</th>
                  <th className="p-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="p-2">{p.program_code}</td>
                    <td className="p-2">{p.program_name}</td>
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
                    <td className="p-2">{p.total_credits ?? '-'}</td>
                    <td className="p-2">{p.start_date || '-'}</td>
                    <td className="p-2">{p.end_date || '-'}</td>
                    <td className="p-2">{p.is_active ? 'Active' : 'Inactive'}</td>
                    <td className="p-2">
                      {Array.isArray(p.KnowledgeBlocks) && p.KnowledgeBlocks.length > 0 ? (
                        <ul className="list-disc pl-4">
                          {p.KnowledgeBlocks.map(kb => (
                            <li key={kb.id}>{kb.block_name}</li>
                          ))}
                        </ul>
                      ) : <span className="text-gray-400">-</span>}
                    </td>
                    <td className="p-2">
                      {Array.isArray(p.Courses) && p.Courses.length > 0 ? (
                        <ul className="list-disc pl-4">
                          {p.Courses.map(course => (
                            <li key={course.id}>
                              <span className="font-medium text-gray-800">{course.course_name}</span>
                              <span className="text-xs text-gray-500 ml-1">
                                ({course.course_code ?? '---'}
                                {course.total_credits ? ` · ${course.total_credits} TC` : ''}
                                {course.is_active === false ? ' · Ngưng' : ''}
                                )
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : <span className="text-gray-400">-</span>}
                    </td>
                    <td className="p-2">
                      <button onClick={() => openEditModal(p)} className="text-blue-600 hover:underline">Sửa</button>
                      <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline ml-2">Xóa</button>
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
