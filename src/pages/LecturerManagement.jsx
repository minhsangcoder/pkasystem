import React, { useEffect, useState } from "react"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import { userAPI, departmentAPI } from "@/services/api"
import toast from "react-hot-toast"

const LecturerManagement = () => {
  const [lecturers, setLecturers] = useState([])
  const [departments, setDepartments] = useState([])
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    user_id: "",
    full_name: "",
    gender: "Nam",
    degree: "",
    position: "",
    organization_unit_id: "",
    email: "",
    phone: "",
    address: "",
    active: "Đang làm việc",
  })

  const loadData = async () => {
    try {
      const [lectRes, deptRes] = await Promise.all([
        userAPI.getAllByRole("lecturer"),
        departmentAPI.getAll(),
      ])
      setLecturers(lectRes.data)
      setDepartments(deptRes.data)
    } catch (err) {
      toast.error("Không tải được dữ liệu")
    }
  }

  useEffect(() => { loadData() }, [])

  const filteredLecturers = lecturers.filter(l =>
    l.full_name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editing) {
        await userAPI.update(editing.id, formData)
        toast.success("Cập nhật giảng viên thành công")
      } else {
        await userAPI.create({ ...formData, role: "lecturer" })
        toast.success("Thêm giảng viên thành công")
      }
      setShowModal(false)
      await loadData()
    } catch {
      toast.error("Lỗi lưu dữ liệu")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý giảng viên</h1>
        <button
          onClick={() => { setEditing(null); setShowModal(true) }}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm giảng viên</span>
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          className="border rounded-md px-3 py-1"
          placeholder="Tìm giảng viên..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-50">
          <tr>
            <th className="table-header">Mã GV</th>
            <th className="table-header">Họ tên</th>
            <th className="table-header">Giới tính</th>
            <th className="table-header">Học vị</th>
            <th className="table-header">Đơn vị</th>
            <th className="table-header">Trạng thái</th>
            <th className="table-header">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredLecturers.map((l) => (
            <tr key={l.id} className="hover:bg-gray-50">
              <td className="table-cell">{l.user_id}</td>
              <td className="table-cell">{l.full_name}</td>
              <td className="table-cell">{l.gender}</td>
              <td className="table-cell">{l.degree}</td>
              <td className="table-cell">{l.OrganizationUnit?.name}</td>
              <td className="table-cell">{l.active}</td>
              <td className="table-cell space-x-2">
                <button
                  onClick={() => { setEditing(l); setFormData({
                    user_id: l.user_id ?? "",
                    full_name: l.full_name ?? "",
                    gender: l.gender ?? "Nam",
                    degree: l.degree ?? "",
                    position: l.position ?? "",
                    organization_unit_id: l.organization_unit_id ?? "",
                    email: l.email ?? "",
                    phone: l.phone ?? "",
                    address: l.address ?? "",
                    active: l.active ?? "Đang làm việc",
                  }); setShowModal(true) }}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={async () => {
                    if (window.confirm("Xóa giảng viên này?")) {
                      await userAPI.delete(l.id)
                      await loadData()
                      toast.success("Đã xóa")
                    }
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-start pt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
            <h2 className="text-lg font-bold mb-4">
              {editing ? "Cập nhật giảng viên" : "Thêm giảng viên"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                className="input-field"
                placeholder="MA ging viAn"
                value={formData.user_id ?? ""}
                onChange={e => setFormData({ ...formData, user_id: e.target.value })}
                required
              />
              <input
                type="text"
                className="input-field"
                placeholder="H? tAn"
                value={formData.full_name ?? ""}
                onChange={e => setFormData({ ...formData, full_name: e.target.value })}
                required
              />
              <select
                value={formData.gender ?? "Nam"}
                onChange={e => setFormData({ ...formData, gender: e.target.value })}
                className="input-field"
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
              <input
                type="text"
                className="input-field"
                placeholder="H?c v<"
                value={formData.degree ?? ""}
                onChange={e => setFormData({ ...formData, degree: e.target.value })}
              />
              <input
                type="text"
                className="input-field"
                placeholder="Chcc v"
                value={formData.position ?? ""}
                onChange={e => setFormData({ ...formData, position: e.target.value })}
              />
              <select
                value={formData.organization_unit_id ?? ""}
                onChange={e => setFormData({ ...formData, organization_unit_id: e.target.value })}
                className="input-field"
              >
                <option value="">Chọn đơn vị</option>
                {departments.map(d => (
                  <option key={d.id} value={d.id}>{d.department_name}</option>
                ))}
              </select>
              <div className="flex justify-end space-x-3 pt-3">
                <button onClick={() => setShowModal(false)} type="button" className="btn-secondary">Hủy</button>
                <button type="submit" className="btn-primary">
                  {editing ? "Lưu" : "Thêm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default LecturerManagement
