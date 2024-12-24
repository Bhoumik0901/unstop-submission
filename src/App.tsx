import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import { useEffect} from "react"

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/profile'); // Navigate to profile if user exists
      
    } else {
      navigate('/'); // Navigate to home if user doesn't exist
    }
  }, []);

  return (
    <div className="w-screen">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Profile />} path="/profile" />

      </Routes>

    </div>
  )
}

export default App
