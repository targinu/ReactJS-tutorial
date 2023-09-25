import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 

import PlanetsScreen from "./screens/planets";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PlanetsScreen />} />
  </Routes>
);

const RoutesWrapper = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default RoutesWrapper;
