import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
// const isLogin = true;

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      
      <Route path="/login" element={true ? <Navigate to='/dashboard'/> : <Login/>} />
      <Route element ={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
    </Routes>
   
    </>
  )
}

export default App
