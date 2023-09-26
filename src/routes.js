import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import PlanetScreen from "./screens/planet"
import PlanetsScreen from "./screens/planets";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PlanetsScreen />} />
    <Route path="/planet/:id" element={<PlanetScreen />} />
  </Routes>
);

const RoutesWrapper = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default RoutesWrapper;
