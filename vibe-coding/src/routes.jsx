import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const HomePage = lazy(() => import('./website/pages/homePage/homePage'))

function AppRoutes() {
  return (
    <main style={{ flex: 1 }}>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Old page URLs (/about, /projects, /pricing) and any unknown path go home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default AppRoutes
