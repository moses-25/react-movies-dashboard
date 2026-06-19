import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Detailpage from "../pages/Detailpage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movie/:id" element={<Detailpage />} />
        </Routes>
    );
}
