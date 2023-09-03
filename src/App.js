import { Routes, Route } from "react-router-dom";

import RegisterPage from './pages/Register';
import LoginPage from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  );
}
export default App;
