// import the react router
import { BrowserRouter } from "react-router-dom";
// import the components
import Navbar from "./components/Navbar";
// import the AppRouter
import AppRoutes from "./routes/AppRoutes";
// import the styles
import "./styles/Dashboard.css";
import "./styles/Details.css";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}