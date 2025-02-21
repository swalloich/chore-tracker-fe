import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Landing, Dashboard, Chores } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chores" element={<Chores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
