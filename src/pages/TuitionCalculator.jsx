import React, { useState, useEffect } from 'react';
import { programAPI, majorAPI } from '@/services/api';
import api from '@/services/api';
import toast from 'react-hot-toast';

export default function TuitionCalculator() {
  const [programs, setPrograms] = useState([]);
  const [majors, setMajors] = useState([]);
  const [selectedProgramId, setSelectedProgramId] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedMajorId, setSelectedMajorId] = useState('');
  const [pricePerCredit, setPricePerCredit] = useState('');
  const [tuition, setTuition] = useState(null);
  const [majorTuition, setMajorTuition] = useState(null);
  const [majorTuitionByYears, setMajorTuitionByYears] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMajor, setLoadingMajor] = useState(false);
  const [loadingMajorByYears, setLoadingMajorByYears] = useState(false);
  const [savingPrice, setSavingPrice] = useState(false);

  useEffect(() => {
    loadPrograms();
    loadMajors();
  }, []);

  useEffect(() => {
    if (selectedProgramId) {
      const program = programs.find(p => p.id === Number(selectedProgramId));
      setSelectedProgram(program || null);
      if (program && program.price_per_credit) {
        setPricePerCredit(String(program.price_per_credit));
      } else {
        setPricePerCredit('');
      }
      setTuition(null);
    } else {
      setSelectedProgram(null);
      setPricePerCredit('');
      setTuition(null);
    }
  }, [selectedProgramId, programs]);

  const loadPrograms = async () => {
    try {
      const response = await programAPI.getAll();
      setPrograms(response.data || []);
    } catch (error) {
      toast.error('Không thể tải danh sách chương trình');
    }
  };

  const loadMajors = async () => {
    try {
      const response = await majorAPI.getAll();
      setMajors(response.data || []);
    } catch (error) {
      toast.error('Không thể tải danh sách ngành học');
    }
  };

  const savePriceToProgram = async () => {
    if (!selectedProgramId) {
      toast.error('Vui lòng chọn chương trình đào tạo');
      return;
    }

    if (pricePerCredit === '') {
      toast.error('Vui lòng nhập giá tín chỉ');
      return;
    }

    const numericPrice = Number(pricePerCredit);
    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      toast.error('Giá tín chỉ phải là số dương');
      return;
    }

    try {
      setSavingPrice(true);
      await api.put(`/programs/${selectedProgramId}/price`, {
        price_per_credit: numericPrice
      });
      toast.success('Đã lưu giá tín chỉ vào chương trình đào tạo');
      await loadPrograms();
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Không thể lưu giá tín chỉ');
    } finally {
      setSavingPrice(false);
    }
  };

  const fetchTuition = async () => {
    if (!selectedProgramId) {
      toast.error('Vui lòng chọn chương trình đào tạo');
      return;
    }

    // Nếu có giá tín chỉ trong input, dùng nó; nếu không, API sẽ dùng giá từ program
    const priceParam = pricePerCredit !== '' ? Number(pricePerCredit) : null;
    if (priceParam !== null && (!Number.isFinite(priceParam) || priceParam <= 0)) {
      toast.error('Giá tín chỉ phải là số dương');
      return;
    }

    try {
      setLoading(true);
      const params = priceParam !== null ? { price_per_credit: priceParam } : {};
      const response = await api.get(`/tuition/${selectedProgramId}`, { params });
      setTuition(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Không thể tính học phí');
      setTuition(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchMajorTuition = async () => {
    if (!selectedMajorId) {
      toast.error('Vui lòng chọn ngành học');
      return;
    }

    try {
      setLoadingMajor(true);
      const response = await majorAPI.getTuition(selectedMajorId);
      setMajorTuition(response.data);
    } catch (error) {
      toast.error(error.message || 'Không thể tính học phí tối thiểu của ngành');
      setMajorTuition(null);
    } finally {
      setLoadingMajor(false);
    }
  };

  const fetchMajorTuitionByYears = async () => {
    if (!selectedMajorId) {
      toast.error('Vui lòng chọn ngành học');
      return;
    }

    try {
      setLoadingMajorByYears(true);
      const response = await majorAPI.getTuitionByYears(selectedMajorId);
      setMajorTuitionByYears(response.data);
    } catch (error) {
      toast.error(error.message || 'Không thể tính học phí tối thiểu của ngành theo năm');
      setMajorTuitionByYears(null);
    } finally {
      setLoadingMajorByYears(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Tính học phí chương trình đào tạo</h2>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-end mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Chương trình đào tạo</label>
            <select
              value={selectedProgramId}
              onChange={e => setSelectedProgramId(e.target.value)}
              className="border rounded-md px-4 py-2 min-w-[280px]"
            >
              <option value="">-- Chọn chương trình đào tạo --</option>
              {programs.map(program => (
                <option key={program.id} value={program.id}>
                  {program.program_code} - {program.program_name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Giá tín chỉ (VND)</label>
            <input
              type="number"
              min="0"
              step="1000"
              value={pricePerCredit}
              onChange={e => setPricePerCredit(e.target.value)}
              className="border rounded-md px-4 py-2 min-w-[200px]"
              placeholder="Nhập giá tín chỉ"
            />
          </div>
          
          <button
            onClick={savePriceToProgram}
            disabled={savingPrice || !selectedProgramId || pricePerCredit === ''}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {savingPrice ? 'Đang lưu...' : 'Lưu giá tín chỉ'}
          </button>
          
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
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {tuition.program_code} - {tuition.program_name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Giá tín chỉ áp dụng</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    }).format(tuition.price_per_credit)}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Học phí tối thiểu/năm học</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    }).format(tuition.tongHocPhi)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ({tuition.price_per_credit.toLocaleString('vi-VN')} × {tuition.tongSoTinChi} TC)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tính học phí tối thiểu của ngành */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Tính học phí tối thiểu của ngành học</h2>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-end mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Ngành học</label>
            <select
              value={selectedMajorId}
              onChange={e => {
                setSelectedMajorId(e.target.value);
                setMajorTuition(null);
                setMajorTuitionByYears(null);
              }}
              className="border rounded-md px-4 py-2 min-w-[280px]"
            >
              <option value="">-- Chọn ngành học --</option>
              {majors.map(major => (
                <option key={major.id} value={major.id}>
                  {major.major_code} - {major.major_name}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={fetchMajorTuition}
            disabled={loadingMajor || !selectedMajorId}
            className="btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingMajor ? 'Đang tính...' : 'Tính học phí tối thiểu'}
          </button>

          <button
            onClick={fetchMajorTuitionByYears}
            disabled={loadingMajorByYears || !selectedMajorId}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingMajorByYears ? 'Đang tính...' : 'Xem 5 năm gần đây'}
          </button>
        </div>

        {majorTuition && (
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {majorTuition.major_code} - {majorTuition.major_name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Số chương trình đào tạo</p>
                  <p className="text-2xl font-bold text-blue-600">{majorTuition.total_programs}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Tổng số tín chỉ</p>
                  <p className="text-2xl font-bold text-green-600">{majorTuition.tongSoTinChi}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Học phí tối thiểu/năm học</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    }).format(majorTuition.tongHocPhiToiThieu)}
                  </p>
                </div>
              </div>

              {majorTuition.programs && majorTuition.programs.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Chi tiết các chương trình đào tạo</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Mã chương trình</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Tên chương trình</th>
                          <th className="border border-gray-300 px-4 py-2 text-center">Tổng tín chỉ</th>
                          <th className="border border-gray-300 px-4 py-2 text-right">Giá tín chỉ</th>
                          <th className="border border-gray-300 px-4 py-2 text-right">Học phí</th>
                        </tr>
                      </thead>
                      <tbody>
                        {majorTuition.programs.map(program => (
                          <tr key={program.program_id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{program.program_code}</td>
                            <td className="border border-gray-300 px-4 py-2">{program.program_name}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{program.total_credits}</td>
                            <td className="border border-gray-300 px-4 py-2 text-right">
                              {new Intl.NumberFormat('vi-VN').format(program.price_per_credit)} đ
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                              {new Intl.NumberFormat('vi-VN').format(program.hoc_phi)} đ
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {majorTuitionByYears && (
          <div className="bg-white border rounded-lg p-6 shadow-sm mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {majorTuitionByYears.major_code} - {majorTuitionByYears.major_name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">Học phí tối thiểu trong 5 năm gần đây</p>
              
              <div className="space-y-6">
                {majorTuitionByYears.years && majorTuitionByYears.years.length > 0 ? (
                  majorTuitionByYears.years.map(yearData => (
                    <div key={yearData.year} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">Năm {yearData.year}</h4>
                        <span className="text-sm text-gray-500">
                          {yearData.total_programs} chương trình đào tạo
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600">Tổng số tín chỉ</p>
                          <p className="text-xl font-bold text-blue-600">{yearData.tongSoTinChi}</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600">Học phí tối thiểu/năm học</p>
                          <p className="text-xl font-bold text-orange-600">
                            {new Intl.NumberFormat('vi-VN', {
                              style: 'currency',
                              currency: 'VND'
                            }).format(yearData.tongHocPhiToiThieu)}
                          </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600">Số chương trình</p>
                          <p className="text-xl font-bold text-green-600">{yearData.total_programs}</p>
                        </div>
                      </div>

                      {yearData.programs && yearData.programs.length > 0 && (
                        <div className="mt-4">
                          <details className="cursor-pointer">
                            <summary className="text-sm font-medium text-gray-700 hover:text-gray-900">
                              Xem chi tiết các chương trình đào tạo ({yearData.programs.length})
                            </summary>
                            <div className="mt-3 overflow-x-auto">
                              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-3 py-2 text-left">Mã CTĐT</th>
                                    <th className="border border-gray-300 px-3 py-2 text-left">Tên CTĐT</th>
                                    <th className="border border-gray-300 px-3 py-2 text-center">Tổng TC</th>
                                    <th className="border border-gray-300 px-3 py-2 text-right">Giá/TC</th>
                                    <th className="border border-gray-300 px-3 py-2 text-right">Học phí</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {yearData.programs.map(program => (
                                    <tr key={program.program_id} className="hover:bg-gray-50">
                                      <td className="border border-gray-300 px-3 py-2">{program.program_code}</td>
                                      <td className="border border-gray-300 px-3 py-2">{program.program_name}</td>
                                      <td className="border border-gray-300 px-3 py-2 text-center">{program.total_credits}</td>
                                      <td className="border border-gray-300 px-3 py-2 text-right">
                                        {new Intl.NumberFormat('vi-VN').format(program.price_per_credit)} đ
                                      </td>
                                      <td className="border border-gray-300 px-3 py-2 text-right font-semibold">
                                        {new Intl.NumberFormat('vi-VN').format(program.hoc_phi)} đ
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </details>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    Không có dữ liệu học phí trong 5 năm gần đây
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
