import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from '@/components/Layout/Layout'

// Trang chính
import Dashboard from '@/pages/Dashboard'

// Quản lý đào tạo
import DepartmentManagement from '@/pages/DepartmentManagement'
import SubjectsManagement from '@/pages/SubjectManagement'
import CohortManagement from '@/pages/CohortManagement'
import MajorManagement from '@/pages/MajorManagement'
import KnowledgeBlockManagement from '@/pages/KnowledgeBlockManagement'
import CurriculumStructureManagement from '@/pages/CurriculumStructureManagement'
import ProgramManagement from '@/pages/ProgramManagement'
import TuitionCalculator from '@/pages/TuitionCalculator';

// Quản lý nhân sự
import LecturerManagement from '@/pages/LecturerManagement'
import StaffManagement from '@/pages/StaffManagement'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Bọc Layout và dùng nested routes */}
          <Route path="/" element={<Layout />}>
            {/* Trang chính */}
            <Route index element={<Dashboard />} />

            {/* Quản lý đào tạo */}
            <Route path="majors" element={<MajorManagement />} />
            <Route path="cohort" element={<CohortManagement />} />
            <Route path="subjects" element={<SubjectsManagement />} />
            <Route path="knowledge-blocks" element={<KnowledgeBlockManagement />} />
            <Route path="curriculum-structure" element={<CurriculumStructureManagement />} />
            <Route path="programs" element={<ProgramManagement />} />
            <Route path="departments" element={<DepartmentManagement />} />
            <Route path="tuition-calculator" element={<TuitionCalculator />} />

            {/* Quản lý nhân sự */}
            <Route path="lecturers" element={<LecturerManagement />} />
            <Route path="staff" element={<StaffManagement />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
