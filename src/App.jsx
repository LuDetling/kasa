import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:logementId" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
