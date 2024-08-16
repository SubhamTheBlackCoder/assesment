import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/upload";
import DashboardLayout from "./layout/DashboardLayout";
import Upload from "./pages/upload";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </div>
  );
}
