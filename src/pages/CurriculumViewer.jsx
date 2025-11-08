import React, { useEffect, useState } from 'react'
import { BookOpen, Layers, ChevronDown, ChevronRight, GraduationCap, Clock } from 'lucide-react'
import { curriculumViewerAPI } from '@/services/api'
import toast from 'react-hot-toast'

const CurriculumViewer = () => {
  const [programs, setPrograms] = useState([])
  const [expandedProgram, setExpandedProgram] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const res = await curriculumViewerAPI.getFullStructure()
      if (res.success) {
        setPrograms(res.data || [])
      } else {
        toast.error('Không thể tải CTĐT')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hiển thị chương trình đào tạo</h1>
        <p className="text-gray-600 mt-2">Xem cấu trúc, khối kiến thức và học phần chi tiết</p>
      </div>

      {programs.length === 0 ? (
        <div className="text-center py-12 bg-white shadow rounded-xl">
          <BookOpen className="mx-auto w-12 h-12 text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-700">Không có chương trình đào tạo nào</h3>
          <p className="text-gray-500 text-sm">Hãy thêm dữ liệu trong phần Quản lý CTĐT trước.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {programs.map((program) => (
            <div key={program.id} className="bg-white shadow-md rounded-xl overflow-hidden">
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-blue-50 transition-all"
                onClick={() => toggleProgram(program.id)}
              >
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{program.program_name}</h3>
                    <p className="text-sm text-gray-500">{program.program_code}</p>
                  </div>
                </div>
                {expandedProgram === program.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </div>

              {/* Chi tiết chương trình */}
              {expandedProgram === program.id && (
                <div className="px-6 pb-4 animate-fadeIn">
                  {Array.isArray(program.KnowledgeBlocks) && program.KnowledgeBlocks.length > 0 ? (
                    <div className="space-y-4">
                      {program.KnowledgeBlocks.map((block) => (
                        <div
                          key={block.id}
                          className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <Layers className="w-5 h-5 text-indigo-500" />
                              <h5 className="font-medium text-gray-800">
                                {block.block_name}
                              </h5>
                            </div>
                            <span className="text-sm text-gray-600">
                              Tổng TC: {block.total_credits || 0}
                            </span>
                          </div>

                          {Array.isArray(block.Courses) && block.Courses.length > 0 ? (
                            <table className="w-full text-sm border border-gray-200 bg-white rounded-md">
                              <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                  <th className="px-3 py-2 text-left">Mã HP</th>
                                  <th className="px-3 py-2 text-left">Tên học phần</th>
                                  <th className="px-3 py-2 text-center">Tín chỉ</th>
                                  <th className="px-3 py-2 text-center">Giờ học</th>
                                  <th className="px-3 py-2 text-left">Cấp độ</th>
                                </tr>
                              </thead>
                              <tbody>
                                {block.Courses.map((course) => (
                                  <tr
                                    key={course.id}
                                    className="hover:bg-gray-50 border-t border-gray-100"
                                  >
                                    <td className="px-3 py-2 text-blue-600 font-medium">
                                      {course.course_code}
                                    </td>
                                    <td className="px-3 py-2">{course.course_name}</td>
                                    <td className="px-3 py-2 text-center">{course.total_credits}</td>
                                    <td className="px-3 py-2 text-center">
                                      <Clock className="inline-block w-4 h-4 text-yellow-500 mr-1" />
                                      {course.duration_hours}
                                    </td>
                                    <td className="px-3 py-2">
                                      <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${course.level === 'Beginner'
                                            ? 'bg-green-100 text-green-700'
                                            : course.level === 'Intermediate'
                                              ? 'bg-yellow-100 text-yellow-700'
                                              : 'bg-red-100 text-red-700'
                                          }`}
                                      >
                                        {course.level === 'Beginner'
                                          ? 'Cơ bản'
                                          : course.level === 'Intermediate'
                                            ? 'Trung cấp'
                                            : 'Nâng cao'}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p className="text-sm text-gray-500 italic">
                              Không có học phần nào trong khối này.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 italic">
                      Không có khối kiến thức nào trong chương trình này.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CurriculumViewer
