import React, { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Search, GitBranch } from 'lucide-react'
import { knowledgeBlockAPI, majorAPI } from '@/services/api'
import toast from 'react-hot-toast'

const KnowledgeBlockManagement = () => {
  const [blocks, setBlocks] = useState([])
  const [majors, setMajors] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('create')
  const [selectedBlock, setSelectedBlock] = useState(null)
  const [formData, setFormData] = useState({
    block_code: '', block_name: '', description: '', total_credits: 0,
    is_required: true, major_id: '', is_active: true
  })

  useEffect(() => { loadData() }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const [blocksRes, majorsRes] = await Promise.all([knowledgeBlockAPI.getAll(), majorAPI.getAll()])
      setBlocks(blocksRes.data)
      setMajors(majorsRes.data)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const filteredBlocks = blocks.filter(b => 
    b.block_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.block_code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreate = () => {
    setModalType('create')
    setSelectedBlock(null)
    setFormData({ block_code: '', block_name: '', description: '', total_credits: 0, is_required: true, major_id: '', is_active: true })
    setShowModal(true)
  }

  const handleEdit = (block) => {
    setModalType('edit')
    setSelectedBlock(block)
    setFormData({
      block_code: block.block_code, block_name: block.block_name, description: block.description || '',
      total_credits: block.total_credits, is_required: block.is_required, major_id: block.major_id || '', is_active: block.is_active
    })
    setShowModal(true)
  }

  const handleDelete = async (block) => {
    if (window.confirm(`Xóa khối ${block.block_name}?`)) {
      try {
        await knowledgeBlockAPI.delete(block.id)
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
        await knowledgeBlockAPI.create(formData)
        toast.success('Tạo thành công!')
      } else {
        await knowledgeBlockAPI.update(selectedBlock.id, formData)
        toast.success('Cập nhật thành công!')
      }
      await loadData()
      setShowModal(false)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý khối kiến thức</h1>
          <p className="text-gray-600 mt-2">Quản lý các khối kiến thức trong chương trình đào tạo</p>
        </div>
        <button onClick={handleCreate} className="btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Thêm khối</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-blue-500 rounded-full">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tổng khối</p>
              <p className="text-2xl font-bold text-gray-900">{blocks.length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-green-500 rounded-full">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Bắt buộc</p>
              <p className="text-2xl font-bold text-gray-900">{blocks.filter(b => b.is_required).length}</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-purple-500 rounded-full">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tự chọn</p>
              <p className="text-2xl font-bold text-gray-900">{blocks.filter(b => !b.is_required).length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input type="text" placeholder="Tìm kiếm..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">Mã khối</th>
                <th className="table-header">Tên khối</th>
                <th className="table-header">Ngành học</th>
                <th className="table-header">Tín chỉ</th>
                <th className="table-header">Loại</th>
                <th className="table-header">Trạng thái</th>
                <th className="table-header">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBlocks.map((block) => (
                <tr key={block.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium text-blue-600">{block.block_code}</td>
                  <td className="table-cell">
                    <div className="font-medium text-gray-900">{block.block_name}</div>
                    {block.description && <div className="text-sm text-gray-500 truncate max-w-xs">{block.description}</div>}
                  </td>
                  <td className="table-cell">{block.Major?.major_name || <span className="text-gray-400">Chưa gán</span>}</td>
                  <td className="table-cell font-medium">{block.total_credits}</td>
                  <td className="table-cell">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${block.is_required ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                      {block.is_required ? 'Bắt buộc' : 'Tự chọn'}
                    </span>
                  </td>
                  <td className="table-cell">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${block.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {block.is_active ? 'Hoạt động' : 'Không hoạt động'}
                    </span>
                  </td>
                  <td className="table-cell">
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(block)} className="text-blue-600 hover:text-blue-900"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(block)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{modalType === 'create' ? 'Thêm khối mới' : 'Chỉnh sửa khối'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mã khối *</label>
                  <input type="text" value={formData.block_code} onChange={(e) => setFormData({...formData, block_code: e.target.value})}
                    className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tên khối *</label>
                  <input type="text" value={formData.block_name} onChange={(e) => setFormData({...formData, block_name: e.target.value})}
                    className="input-field" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
                <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="input-field" rows="3" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số tín chỉ</label>
                  <input type="number" value={formData.total_credits} onChange={(e) => setFormData({...formData, total_credits: parseInt(e.target.value) || 0})}
                    className="input-field" min="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ngành học</label>
                  <select value={formData.major_id} onChange={(e) => setFormData({...formData, major_id: e.target.value})} className="input-field">
                    <option value="">Chọn ngành học</option>
                    {majors.map(m => <option key={m.id} value={m.id}>{m.major_name}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" checked={formData.is_required} onChange={(e) => setFormData({...formData, is_required: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-900">Bắt buộc</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" checked={formData.is_active} onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-900">Hoạt động</span>
                </label>
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

export default KnowledgeBlockManagement
