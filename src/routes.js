import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import PlanetScreen from "./screens/planet"
import PlanetsScreen from "./screens/planets";
import NotFoundScreen from "./screens/notFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PlanetsScreen />} />
    <Route path="/planet/:id" element={<PlanetScreen />} />
    <Route path="*" Component={NotFoundScreen}/>
  </Routes>
);

const RoutesWrapper = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default RoutesWrapper;
