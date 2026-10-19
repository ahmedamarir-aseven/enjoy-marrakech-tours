import { Routes, Route } from 'react-router'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import Home from './pages/Home'
import Details from './pages/Details'
import ServiceCategoryPage from './pages/ServiceCategoryPage'

export default function App() {
  return (
    <>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:slug" element={<Details />} />
        <Route path="/services/:categoryId" element={<ServiceCategoryPage />} />
      </Routes>
    </>
  )
}

