import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import { useEffect} from "react"

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/home'); // Navigate to profile if user exists
      
    } else {
      navigate('/login'); // Navigate to home if user doesn't exist
    }
  }, [navigate]);

  return (
    <div className="w- h-screen">
      <Routes>
        
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/home" />
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>

    </div>
  )
}

export default App
