import React, { useEffect, useState } from "react"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import { userAPI, departmentAPI } from "@/services/api"
import toast from "react-hot-toast"

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([])
  const [departments, setDepartments] = useState([])
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    user_id: "",
    full_name: "",
    gender: "Nam",
    position: "",
    organization_unit_id: "",
    email: "",
    phone: "",
    address: "",
    active: "Đang làm việc",
  })

  // Load dữ liệu
  const loadData = async () => {
    try {
      const [staffRes, deptRes] = await Promise.all([
        userAPI.getAllByRole("staff"),
        departmentAPI.getAll(),
      ])
      setStaffList(staffRes.data)
      setDepartments(deptRes.data)
    } catch (err) {
      toast.error("Không tải được dữ liệu nhân viên hành chính")
    }
  }

  useEffect(() => { loadData() }, [])

  const filteredStaff = staffList.filter((s) =>
    s.full_name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editing) {
        // Prevent sending empty strings for required FKs
        const payload = { ...formData }
        if (payload.organization_unit_id === "") delete payload.organization_unit_id
        if (payload.position === "") delete payload.position
        await userAPI.update(editing.id, payload)
        toast.success("Cập nhật nhân viên thành công")
      } else {
        await userAPI.create({ ...formData, role: "staff" })
        toast.success("Thêm nhân viên hành chính thành công")
      }
      setShowModal(false)
      await loadData()
    } catch {
      toast.error("Lỗi khi lưu dữ liệu")
    }
  }

  const handleDelete = async (staff) => {
    if (window.confirm(`Xóa nhân viên ${staff.full_name}?`)) {
      try {
        await userAPI.delete(staff.id)
        toast.success("Đã xóa nhân viên")
        await loadData()
      } catch {
        toast.error("Lỗi khi xóa nhân viên")
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý nhân viên hành chính</h1>
        <button
          onClick={() => { setEditing(null); setShowModal(true) }}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm nhân viên</span>
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          className="border rounded-md px-3 py-1"
          placeholder="Tìm nhân viên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-50">
          <tr>
            <th className="table-header">Mã NV</th>
            <th className="table-header">Họ tên</th>
            <th className="table-header">Giới tính</th>
            <th className="table-header">Chức vụ</th>
            <th className="table-header">Phòng ban</th>
            <th className="table-header">Email</th>
            <th className="table-header">Số điện thoại</th>
            <th className="table-header">Trạng thái</th>
            <th className="table-header">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((s) => (
            <tr key={s.id} className="hover:bg-gray-50">
              <td className="table-cell">{s.user_id}</td>
              <td className="table-cell">{s.full_name}</td>
              <td className="table-cell">{s.gender}</td>
              <td className="table-cell">{s.position}</td>
              <td className="table-cell">{s.OrganizationUnit?.name}</td>
              <td className="table-cell">{s.email}</td>
              <td className="table-cell">{s.phone}</td>
              <td className="table-cell">{s.active}</td>
              <td className="table-cell flex space-x-2">
                <button
                  onClick={() => {
                    setEditing(s)
                    setFormData({
                      user_id: s.user_id ?? "",
                      full_name: s.full_name ?? "",
                      gender: s.gender ?? "Nam",
                      position: s.position ?? "",
                      organization_unit_id: s.organization_unit_id ?? "",
                      email: s.email ?? "",
                      phone: s.phone ?? "",
                      address: s.address ?? "",
                      active: s.active ?? "Đang làm việc",
                    })
                    setShowModal(true)
                  }}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(s)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-start pt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
            <h2 className="text-lg font-bold mb-4">
              {editing ? "Cập nhật nhân viên hành chính" : "Thêm nhân viên hành chính"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                className="input-field"
                placeholder="Mã nhân viên"
                value={formData.user_id ?? ""}
                onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
                required
              />
              <input
                type="text"
                className="input-field"
                placeholder="Họ tên"
                value={formData.full_name ?? ""}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                required
              />
              <select
                value={formData.gender ?? "Nam"}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="input-field"
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
              <input
                type="text"
                className="input-field"
                placeholder="Chức vụ"
                value={formData.position ?? ""}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              />
              <select
                value={formData.organization_unit_id ?? ""}
                onChange={(e) => setFormData({ ...formData, organization_unit_id: e.target.value })}
                className="input-field"
              >
                <option value="">Chọn phòng ban</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.department_name}
                  </option>
                ))}
              </select>
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={formData.email ?? ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                className="input-field"
                placeholder="Số điện thoại"
                value={formData.phone ?? ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <textarea
                className="input-field"
                placeholder="Địa chỉ"
                value={formData.address ?? ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows="2"
              />
              <select
                value={formData.active ?? "Đang làm việc"}
                onChange={(e) => setFormData({ ...formData, active: e.target.value })}
                className="input-field"
              >
                <option value="Đang làm việc">Đang làm việc</option>
                <option value="Nghỉ việc">Nghỉ việc</option>
              </select>
              <div className="flex justify-end space-x-3 pt-3">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="btn-secondary"
                >
                  Hủy
                </button>
                <button type="submit" className="btn-primary">
                  {editing ? "Lưu thay đổi" : "Thêm mới"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default StaffManagement
