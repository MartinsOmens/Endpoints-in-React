import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Job from "../pages/Job";
import AddJob from "../pages/AddJob";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Job />} />
        {/* <Route path="add-job" element={<AddJob />} /> */}
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
