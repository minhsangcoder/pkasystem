import React, { useState, useEffect } from 'react';
import { programAPI } from '@/services/api';
import api from '@/services/api';
import toast from 'react-hot-toast';

export default function TuitionCalculator() {
  const [programs, setPrograms] = useState([]);
  const [selectedProgramId, setSelectedProgramId] = useState('');
  const [tuition, setTuition] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const response = await programAPI.getAll();
      setPrograms(response.data || []);
    } catch (error) {
      toast.error('Không thể tải danh sách chương trình');
    }
  };

  const fetchTuition = async () => {
    if (!selectedProgramId) {
      toast.error('Vui lòng chọn chương trình đào tạo');
      return;
    }

    try {
      setLoading(true);
      const response = await api.get(`/tuition/${selectedProgramId}`);
      setTuition(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Không thể tính học phí');
      setTuition(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Tính học phí chương trình đào tạo</h2>
        
        <div className="flex gap-4 mb-6">
          <select
            value={selectedProgramId}
            onChange={e => setSelectedProgramId(e.target.value)}
            className="border rounded-md px-4 py-2 min-w-[300px]"
          >
            <option value="">-- Chọn chương trình đào tạo --</option>
            {programs.map(program => (
              <option key={program.id} value={program.id}>
                {program.program_code} - {program.program_name}
              </option>
            ))}
          </select>
          
          <button
            onClick={fetchTuition}
            disabled={loading || !selectedProgramId}
            className="btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Đang tính...' : 'Tính học phí'}
          </button>
        </div>

        {tuition && (
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tuition.program_code} - {tuition.program_name}
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Tổng số tín chỉ</p>
                  <p className="text-2xl font-bold text-blue-600">{tuition.tongSoTinChi}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Tổng học phí</p>
                  <p className="text-2xl font-bold text-green-600">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    }).format(tuition.tongHocPhi)}
                  </p>
                </div>
              </div>
            </div>

            {tuition.chiTiet && tuition.chiTiet.length > 0 ? (
              <div>
                <h4 className="text-lg font-semibold mb-4">Chi tiết học phí</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Mã học phần</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Tên học phần</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Khối kiến thức</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Số tín chỉ</th>
                        <th className="border border-gray-300 px-4 py-2 text-right">Giá/tín chỉ</th>
                        <th className="border border-gray-300 px-4 py-2 text-right">Học phí</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tuition.chiTiet.map(hp => (
                        <tr key={hp.id} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">{hp.ma_hoc_phan}</td>
                          <td className="border border-gray-300 px-4 py-2">{hp.ten_hoc_phan}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{hp.khoi_kien_thuc}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{hp.so_tin_chi}</td>
                          <td className="border border-gray-300 px-4 py-2 text-right">
                            {new Intl.NumberFormat('vi-VN').format(hp.gia_tin_chi)} đ
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                            {new Intl.NumberFormat('vi-VN').format(hp.hoc_phi)} đ
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Chương trình này chưa có học phần nào.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
