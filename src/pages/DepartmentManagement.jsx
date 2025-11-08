import React, { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Search, Filter, Building, Users } from 'lucide-react'
import toast from 'react-hot-toast'
import { departmentAPI, positionAPI } from '@/services/api'  // Import API service

const DepartmentManagement = () => {
  const [activeTab, setActiveTab] = useState('departments')
  const [departments, setDepartments] = useState([])
  const [positions, setPositions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('create')
  const [selectedItem, setSelectedItem] = useState(null)
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    status: 'active'
  })

  // Load dữ liệu khi component mount
  useEffect(() => {
    loadData()
  }, [])

  // Load dữ liệu từ API
  const loadData = async () => {
    try {
      setLoading(true)
      await Promise.all([
        loadDepartments(),
        loadPositions()
      ])
    } catch (error) {
      console.error('Error loading data:', error)
      toast.error('Không thể tải dữ liệu')
    } finally {
      setLoading(false)
    }
  }

  const loadDepartments = async () => {
    try {
      const response = await departmentAPI.getAll()
      console.log('Departments loaded:', response.data)
      setDepartments(response.data || [])
    } catch (error) {
      console.error('Error loading departments:', error)
      toast.error(error.message)
    }
  }

  const loadPositions = async () => {
    try {
      const response = await positionAPI.getAll()
      console.log('Positions loaded:', response.data)
      setPositions(response.data || [])
    } catch (error) {
      console.error('Error loading positions:', error)
      toast.error(error.message)
    }
  }

  // Bộ lọc tìm kiếm
  const filteredDepartments = departments.filter(dept =>
    (dept.department_name && dept.department_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (dept.department_code && dept.department_code.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const filteredPositions = positions.filter(pos =>
    (pos.position_name && pos.position_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (pos.position_code && pos.position_code.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  // CRUD operations
  const handleCreate = () => {
    setModalType('create')
    setSelectedItem(null)
    if (activeTab === 'departments') {
      setFormData({
        department_code: '',
        department_name: '',
        description: '',
        parent_department_id: '',
        manager_id: '',
        is_active: true
      })
    } else {
      setFormData({
        position_code: '',
        position_name: '',
        description: '',
        level: 1,
        department_id: '',
        is_active: true
      })
    }
    setShowModal(true)
  }

  const handleEdit = (item) => {
    setModalType('edit')
    setSelectedItem(item)
    if (activeTab === 'departments') {
      setFormData({
        department_code: item.department_code || '',
        department_name: item.department_name || '',
        description: item.description || '',
        parent_department_id: item.parent_department_id || '',
        manager_id: item.manager_id || '',
        is_active: item.is_active !== undefined ? item.is_active : true
      })
    } else {
      setFormData({
        position_code: item.position_code || '',
        position_name: item.position_name || '',
        description: item.description || '',
        level: item.level || 1,
        department_id: item.department_id || '',
        is_active: item.is_active !== undefined ? item.is_active : true
      })
    }
    setShowModal(true)
  }

  const handleDelete = async (item) => {
    const itemName = item.department_name || item.position_name
    if (!window.confirm(`Bạn có chắc chắn muốn xóa ${itemName}?`)) return

    try {
      if (activeTab === 'departments') {
        await departmentAPI.delete(item.id)
        toast.success('Xóa phòng ban thành công!')
        loadDepartments()
      } else {
        await positionAPI.delete(item.id)
        toast.success('Xóa chức vụ thành công!')
        loadPositions()
      }
    } catch (error) {
      console.error('Delete error:', error)
      toast.error(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (activeTab === 'departments') {
        if (modalType === 'create') {
          await departmentAPI.create(formData)
          toast.success('Tạo phòng ban thành công!')
        } else {
          await departmentAPI.update(selectedItem.id, formData)
          toast.success('Cập nhật phòng ban thành công!')
        }
        loadDepartments()
      } else {
        if (modalType === 'create') {
          await positionAPI.create(formData)
          toast.success('Tạo chức vụ thành công!')
        } else {
          await positionAPI.update(selectedItem.id, formData)
          toast.success('Cập nhật chức vụ thành công!')
        }
        loadPositions()
      }
      setShowModal(false)
    } catch (error) {
      console.error('Submit error:', error)
      toast.error(error.message)
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Bảng hiển thị phòng ban
  const DepartmentTable = () => (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      {filteredDepartments.length === 0 ? (
        <div className="text-center py-12">
          <Building className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Không có dữ liệu</h3>
          <p className="text-gray-500">Chưa có phòng ban nào hoặc không có kết quả tìm kiếm.</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="table-header">Mã phòng ban</th>
              <th className="table-header">Tên phòng ban</th>
              <th className="table-header">Mô tả</th>
              <th className="table-header">Trạng thái</th>
              <th className="table-header">Thao tác</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDepartments.map((dept) => (
              <tr key={dept.id} className="hover:bg-gray-50">
                <td className="table-cell font-medium text-blue-600">{dept.department_code}</td>
                <td className="table-cell">{dept.department_name}</td>
                <td className="table-cell max-w-xs truncate">{dept.description || 'Chưa có mô tả'}</td>
                <td className="table-cell">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    dept.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {dept.is_active ? 'Hoạt động' : 'Không hoạt động'}
                  </span>
                </td>
                <td className="table-cell">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(dept)} 
                      className="text-blue-600 hover:text-blue-900"
                      title="Chỉnh sửa"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(dept)} 
                      className="text-red-600 hover:text-red-900"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )

  // Bảng hiển thị chức vụ
  const PositionTable = () => (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      {filteredPositions.length === 0 ? (
        <div className="text-center py-12">
          <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Không có dữ liệu</h3>
          <p className="text-gray-500">Chưa có chức vụ nào hoặc không có kết quả tìm kiếm.</p>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="table-header">Mã chức vụ</th>
              <th className="table-header">Tên chức vụ</th>
              <th className="table-header">Cấp độ</th>
              <th className="table-header">Phòng ban</th>
              <th className="table-header">Mô tả</th>
              <th className="table-header">Trạng thái</th>
              <th className="table-header">Thao tác</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPositions.map((pos) => (
              <tr key={pos.id} className="hover:bg-gray-50">
                <td className="table-cell font-medium text-blue-600">{pos.position_code}</td>
                <td className="table-cell">{pos.position_name}</td>
                <td className="table-cell">{pos.level}</td>
                <td className="table-cell">{pos.Department?.department_name || 'Chưa có'}</td>
                <td className="table-cell max-w-xs truncate">{pos.description || 'Chưa có mô tả'}</td>
                <td className="table-cell">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    pos.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {pos.is_active ? 'Hoạt động' : 'Không hoạt động'}
                  </span>
                </td>
                <td className="table-cell">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(pos)} 
                      className="text-blue-600 hover:text-blue-900"
                      title="Chỉnh sửa"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(pos)} 
                      className="text-red-600 hover:text-red-900"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý cơ cấu tổ chức</h1>
          <p className="text-gray-600 mt-2">Quản lý phòng ban và chức vụ trong tổ chức</p>
        </div>
        <button 
          onClick={handleCreate} 
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Thêm mới</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-blue-500 rounded-full">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tổng phòng ban</p>
              <p className="text-2xl font-bold text-gray-900">{departments.length}</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-green-500 rounded-full">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tổng chức vụ</p>
              <p className="text-2xl font-bold text-gray-900">{positions.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('departments')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'departments'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Building className="w-5 h-5 inline mr-2" />
            Phòng ban ({departments.length})
          </button>
          <button
            onClick={() => setActiveTab('positions')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'positions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Users className="w-5 h-5 inline mr-2" />
            Chức vụ ({positions.length})
          </button>
        </nav>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            <span>Bộ lọc</span>
          </button>
        </div>
      </div>

      {/* Table */}
      {activeTab === 'departments' ? <DepartmentTable /> : <PositionTable />}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {modalType === 'create' 
                  ? `Thêm ${activeTab === 'departments' ? 'phòng ban' : 'chức vụ'} mới`
                  : `Chỉnh sửa ${activeTab === 'departments' ? 'phòng ban' : 'chức vụ'}`}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mã {activeTab === 'departments' ? 'phòng ban' : 'chức vụ'} *
                  </label>
                  <input
                    type="text"
                    value={activeTab === 'departments' ? formData.department_code || '' : formData.position_code || ''}
                    onChange={(e) => setFormData({
                      ...formData, 
                      [activeTab === 'departments' ? 'department_code' : 'position_code']: e.target.value
                    })}
                    className="input-field"
                    required
                    placeholder="VD: IT, HR, DEV..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên {activeTab === 'departments' ? 'phòng ban' : 'chức vụ'} *
                  </label>
                  <input
                    type="text"
                    value={activeTab === 'departments' ? formData.department_name || '' : formData.position_name || ''}
                    onChange={(e) => setFormData({
                      ...formData, 
                      [activeTab === 'departments' ? 'department_name' : 'position_name']: e.target.value
                    })}
                    className="input-field"
                    required
                    placeholder={`VD: ${activeTab === 'departments' ? 'Phòng Công nghệ thông tin' : 'Lập trình viên'}`}
                  />
                </div>

                {activeTab === 'positions' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cấp độ *
                      </label>
                      <input
                        type="number"
                        value={formData.level || 1}
                        onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
                        className="input-field"
                        min="1"
                        max="10"
                        required
                        placeholder="1-10"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phòng ban *
                      </label>
                      <select
                        value={formData.department_id || ''}
                        onChange={(e) => setFormData({...formData, department_id: e.target.value})}
                        className="input-field"
                        required
                      >
                        <option value="">Chọn phòng ban</option>
                        {departments.map(dept => (
                          <option key={dept.id} value={dept.id}>{dept.department_name}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mô tả
                  </label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="input-field"
                    rows="3"
                    placeholder="Mô tả chi tiết..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trạng thái
                  </label>
                  <select
                    value={formData.is_active ? 'true' : 'false'}
                    onChange={(e) => setFormData({...formData, is_active: e.target.value === 'true'})}
                    className="input-field"
                  >
                    <option value="true">Hoạt động</option>
                    <option value="false">Không hoạt động</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowModal(false)} 
                    className="btn-secondary"
                  >
                    Hủy
                  </button>
                  <button 
                    type="submit" 
                    className="btn-primary"
                  >
                    {modalType === 'create' ? 'Tạo mới' : 'Cập nhật'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DepartmentManagement