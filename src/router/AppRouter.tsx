import { Route, Routes, Navigate } from "react-router-dom";
import { Inicio } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Inicio />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
