import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Dashboard from "./Pages/dashboard.jsx";
import LiveMonitoring from "./Pages/livemonitoring.jsx";
import Alerts from "./Pages/alert.jsx";
import Reports from "./Pages/reports.jsx";
import Login from "./Pages/login.jsx";

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <div className="layout">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring" element={<LiveMonitoring />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
