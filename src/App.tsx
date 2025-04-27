import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import './App.css'

function App() { 
  return (
    <Router>
      <Routes>
        {/* Mặc định root "/" sẽ chuyển về "/login" nếu chưa đăng nhập */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Trang login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Trang contact – yêu cầu đăng nhập */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />

        {/* Mọi route không tồn tại khác đều về login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

