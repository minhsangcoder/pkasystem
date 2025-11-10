import React, { useEffect, useState } from "react"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import { userAPI, departmentAPI } from "@/services/api"
import toast from "react-hot-toast"

const DEGREE_OPTIONS = ["Giáo sư", "Phó giáo sư", "Tiến sĩ", "Thạc sĩ"]

const initialFormState = {
  user_id: "",
  full_name: "",
  gender: "Nam",
  degrees: [],
  organization_unit_id: "",
  email: "",
  phone: "",
  address: "",
  active: "Đang làm việc",
}

const LecturerManagement = () => {
  const [lecturers, setLecturers] = useState([])
  const [departments, setDepartments] = useState([])
  const [search, setSearch] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({ ...initialFormState })

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
      const degreeString = (formData.degrees || []).join(', ');
      const payload = {
        user_id: formData.user_id,
        full_name: formData.full_name,
        degree: degreeString,
        gender: formData.gender,
        organization_unit_id: formData.organization_unit_id ? Number(formData.organization_unit_id) : undefined,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        active: formData.active,
      }
      if (editing) {
        await userAPI.update(editing.id, payload)
        toast.success("Cập nhật giảng viên thành công")
      } else {
        await userAPI.create({ ...payload, role: "lecturer" })
        toast.success("Thêm giảng viên thành công")
      }
      setShowModal(false)
      setFormData({ ...initialFormState })
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
          onClick={() => {
            setEditing(null)
            setFormData({ ...initialFormState })
            setShowModal(true)
          }}
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
              <td className="table-cell">{Array.isArray(l.degrees) ? l.degrees.join(", ") : (l.degree ?? "")}</td>
              <td className="table-cell">{l.OrganizationUnit?.name}</td>
              <td className="table-cell">{l.active}</td>
              <td className="table-cell space-x-2">
                <button
                  onClick={() => {
                    const degArr = Array.isArray(l.degrees)
                      ? l.degrees
                      : (l.degree ? String(l.degree).split(',').map(s => s.trim()) : [])
                    setEditing(l)
                    setFormData({
                      user_id: l.user_id ?? "",
                      full_name: l.full_name ?? "",
                      gender: l.gender ?? "Nam",
                      degrees: degArr,
                      organization_unit_id: l.organization_unit_id ? String(l.organization_unit_id) : "",
                      email: l.email ?? "",
                      phone: l.phone ?? "",
                      address: l.address ?? "",
                      active: l.active ?? "Đang làm việc",
                    })
                    setShowModal(true)
                  }}
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
                placeholder="Mã giảng viên"
                value={formData.user_id ?? ""}
                onChange={e => setFormData({ ...formData, user_id: e.target.value })}
                required
              />
              <input
                type="text"
                className="input-field"
                placeholder="Họ tên"
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
              <div>
                <label className="block mb-1">Học vị</label>
                <div className="flex flex-wrap gap-3">
                  {DEGREE_OPTIONS.map(opt => (
                    <label key={opt} className="inline-flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={formData.degrees?.includes(opt)}
                        onChange={(e) => {
                          setFormData(prev => {
                            const set = new Set(prev.degrees || [])
                            if (e.target.checked) {
                              set.add(opt)
                            } else {
                              set.delete(opt)
                            }
                            return { ...prev, degrees: Array.from(set) }
                          })
                        }}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <select
                value={formData.organization_unit_id ?? ""}
                onChange={e => setFormData({ ...formData, organization_unit_id: e.target.value })}
                className="input-field"
                required
              >
                <option value="">Chọn đơn vị</option>
                {departments.map(d => (
                  <option key={d.id} value={d.id}>{d.department_name}</option>
                ))}
              </select>
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={formData.email ?? ""}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="tel"
                className="input-field"
                placeholder="Số điện thoại"
                value={formData.phone ?? ""}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                className="input-field"
                placeholder="Địa chỉ"
                value={formData.address ?? ""}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
              />
              <select
                value={formData.active ?? "Đang làm việc"}
                onChange={e => setFormData({ ...formData, active: e.target.value })}
                className="input-field"
              >
                <option value="Đang làm việc">Đang làm việc</option>
                <option value="Nghỉ việc">Nghỉ việc</option>
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
