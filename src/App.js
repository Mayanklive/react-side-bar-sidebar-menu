import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/pages/AdminLogin";
import NotFound from "./components/pages/NotFound";
import DashboardRouting from "./components/pages/DashboardRouting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/user/*" element={<DashboardRouting />} />
      </Routes>
    </Router>
  );
}

export default App;
