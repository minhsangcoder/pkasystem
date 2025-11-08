import React, { useEffect, useState } from 'react'
import { programAPI, knowledgeBlockAPI } from '@/services/api'
import toast from 'react-hot-toast'

function ProgramManagement() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(false)
  const [knowledgeBlocks, setKnowledgeBlocks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('create')
  const [modalForm, setModalForm] = useState({
    program_code: '',
    program_name: '',
    description: '',
    start_date: '',
    end_date: '',
    is_active: true,
    knowledge_block_ids: []
  })

  const fetchPrograms = async () => {
    try {
      setLoading(true)
      const res = await programAPI.getAll()
      setPrograms(res.data || [])
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

  useEffect(() => {
    fetchPrograms()
    fetchKnowledgeBlocks()
  }, [])

  const openCreateModal = () => {
    setModalType('create')
    setModalForm({
      program_code: '',
      program_name: '',
      description: '',
      start_date: '',
      end_date: '',
      is_active: true,
      knowledge_block_ids: []
    })
    setShowModal(true)
  }

  const openEditModal = (p) => {
    setModalType('edit')
    setModalForm({
      ...p,
      knowledge_block_ids: Array.isArray(p.KnowledgeBlocks) ? p.KnowledgeBlocks.map(kb => kb.id) : [],
      start_date: p.start_date || '',
      end_date: p.end_date || '',
      description: p.description || '',
      is_active: p.is_active !== undefined ? p.is_active : true,
    })
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  const handleModalChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'knowledge_block_ids') {
      // handled by checkbox below
    } else {
      setModalForm(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
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

  const handleModalSubmit = async (e) => {
    e.preventDefault()
    if (!modalForm.program_code || !modalForm.program_name) {
      toast.error('Mã chương trình đào tạo và tên chương trình đào tạo là bắt buộc')
      return
    }
    try {
      if (modalType === 'create') {
        await programAPI.create(modalForm)
        toast.success('Tạo chương trình đào tạo thành công')
      } else {
        await programAPI.update(modalForm.id, modalForm)
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
                  <th className="p-2">Ngày bắt đầu</th>
                  <th className="p-2">Ngày kết thúc</th>
                  <th className="p-2">Trạng thái</th>
                  <th className="p-2">Khối kiến thức</th>
                  <th className="p-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="p-2">{p.program_code}</td>
                    <td className="p-2">{p.program_name}</td>
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
