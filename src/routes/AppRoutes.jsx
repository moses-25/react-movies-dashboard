// import the react router
import { Routes, Route } from "react-router-dom";
// import the pages
import Dashboard from "../pages/Dashboard";
import Detailpage from "../pages/Detailpage";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movie/:id" element={<Detailpage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}
