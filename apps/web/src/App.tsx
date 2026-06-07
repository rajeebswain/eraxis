import { Routes, Route, Navigate } from "react-router-dom";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function HRMS() {
  return <h1>HRMS</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/hrms" element={<HRMS />} />
    </Routes>
  );
}
