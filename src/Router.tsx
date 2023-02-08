import { Routes, Route } from 'react-router-dom'
import { History } from './components/History'
import { Home } from './components/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
