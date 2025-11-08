import React, { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, BookOpen } from 'lucide-react'
import { curriculumAPI, majorAPI, knowledgeBlockAPI } from '@/services/api'
import toast from 'react-hot-toast'

const CurriculumStructureManagement = () => {
  const [structures, setStructures] = useState([])
  const [majors, setMajors] = useState([])
  const [blocks, setBlocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('create')
  const [selectedStructure, setSelectedStructure] = useState(null)
  const [formData, setFormData] = useState({
    major_id: '', knowledge_block_id: '', semester: 1, is_required: true, min_credits: 0, notes: ''
  })

  useEffect(() => { loadData() }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [structRes, majorRes, blockRes] = await Promise.all([
        curriculumAPI.getAll(), majorAPI.getAll(), knowledgeBlockAPI.getAll()
      ])
      setStructures(structRes.data)
      setMajors(majorRes.data)
      setBlocks(blockRes.data)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = () => {
    setModalType('create')
    setSelectedStructure(null)
    setFormData({ major_id: '', knowledge_block_id: '', semester: 1, is_required: true, min_credits: 0, notes: '' })
    setShowModal(true)
  }

  const handleEdit = (structure) => {
    setModalType('edit')
    setSelectedStructure(structure)
    setFormData({
      major_id: structure.major_id, knowledge_block_id: structure.knowledge_block_id,
      semester: structure.semester || 1, is_required: structure.is_required,
      min_credits: structure.min_credits, notes: structure.notes || ''
    })
    setShowModal(true)
  }

  const handleDelete = async (structure) => {
    if (window.confirm('Xóa cấu trúc này?')) {
      try {
        await curriculumAPI.delete(structure.id)
        await loadData()
        toast.success('Xóa thành công!')
      } catch (error) {
        toast.error(error.message)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (modalType === 'create') {
        await curriculumAPI.create(formData)
        toast.success('Tạo thành công!')
      } else {
        await curriculumAPI.update(selectedStructure.id, formData)
        toast.success('Cập nhật thành công!')
      }
      await loadData()
      setShowModal(false)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const groupedByMajor = structures.reduce((acc, s) => {
    const key = s.major_id
    if (!acc[key]) acc[key] = []
    acc[key].push(s)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cấu trúc chương trình đào tạo</h1>
          <p className="text-gray-600 mt-2">Quản lý cấu trúc CTĐT theo ngành học</p>
        </div>
        <button onClick={handleCreate} className="btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Thêm cấu trúc</span>
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.keys(groupedByMajor).map(majorId => {
            const major = majors.find(m => m.id === parseInt(majorId))
            const items = groupedByMajor[majorId]
            return (
              <div key={majorId} className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  {major?.major_name} ({major?.major_code})
                </h2>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="table-header">Học kỳ</th>
                      <th className="table-header">Khối kiến thức</th>
                      <th className="table-header">Loại</th>
                      <th className="table-header">Tín chỉ tối thiểu</th>
                      <th className="table-header">Ghi chú</th>
                      <th className="table-header">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map(s => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="table-cell font-medium">HK {s.semester}</td>
                        <td className="table-cell">{s.KnowledgeBlock?.block_name}</td>
                        <td className="table-cell">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${s.is_required ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                            {s.is_required ? 'Bắt buộc' : 'Tự chọn'}
                          </span>
                        </td>
                        <td className="table-cell">{s.min_credits}</td>
                        <td className="table-cell text-gray-500">{s.notes || '-'}</td>
                        <td className="table-cell">
                          <div className="flex space-x-2">
                            <button onClick={() => handleEdit(s)} className="text-blue-600 hover:text-blue-900"><Edit className="w-4 h-4" /></button>
                            <button onClick={() => handleDelete(s)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{modalType === 'create' ? 'Thêm cấu trúc' : 'Chỉnh sửa cấu trúc'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ngành học *</label>
                  <select value={formData.major_id} onChange={(e) => setFormData({...formData, major_id: e.target.value})} className="input-field" required>
                    <option value="">Chọn ngành học</option>
                    {majors.map(m => <option key={m.id} value={m.id}>{m.major_name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Khối kiến thức *</label>
                  <select value={formData.knowledge_block_id} onChange={(e) => setFormData({...formData, knowledge_block_id: e.target.value})} className="input-field" required>
                    <option value="">Chọn khối</option>
                    {blocks.map(b => <option key={b.id} value={b.id}>{b.block_name}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Học kỳ</label>
                  <input type="number" value={formData.semester} onChange={(e) => setFormData({...formData, semester: parseInt(e.target.value) || 1})} className="input-field" min="1" max="10" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tín chỉ tối thiểu</label>
                  <input type="number" value={formData.min_credits} onChange={(e) => setFormData({...formData, min_credits: parseInt(e.target.value) || 0})} className="input-field" min="0" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                <textarea value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="input-field" rows="2" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={formData.is_required} onChange={(e) => setFormData({...formData, is_required: e.target.checked})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label className="ml-2 text-sm text-gray-900">Bắt buộc</label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary">Hủy</button>
                <button type="submit" className="btn-primary">{modalType === 'create' ? 'Tạo mới' : 'Cập nhật'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CurriculumStructureManagement
