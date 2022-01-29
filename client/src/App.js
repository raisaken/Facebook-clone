import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/register" element={<Register/> }/>
      <Route path="/profile/:username" element={<Profile/> }/>
    </Routes>
  </BrowserRouter>;
}

export default App;
