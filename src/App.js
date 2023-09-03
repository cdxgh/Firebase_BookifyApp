import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/Login" element={<h1>Login</h1>} />
    </Routes>
  );
}
export default App;
