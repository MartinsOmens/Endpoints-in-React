import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Job from "../pages/Job";
import AddJob from "../pages/AddJob";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import JobPage from "../pages/JobPage";
import EditJobPage from "../pages/EditJobPage";

const AppRouter = () => {
  
  
  //Add Job
  const addJob = async (newJob) => {
    // Function to handle adding a job
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return response;
  };

  //Delete Job
  const deleteJob = async (id) => {
    // Function to handle deleting a job
    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return response;
  };

  //Update Job
  const updateJob = async (updatedJob) => {
    // Function to handle updating a job
    const response = await fetch(`/api/jobs/${updatedJob.id}`, {  
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
    return response;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Job />} />
        <Route path="add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
         <Route path="edit-job/:id" element={<EditJobPage updateJobSubmit = {updateJob} />}  />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
