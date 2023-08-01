import { Route, Routes, Navigate } from "react-router-dom";
import { Inicio, Proyectos, Contacto } from "../pages";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Inicio />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
