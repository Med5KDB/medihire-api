import { Router } from "express";
import {
  addJobApplication,
  updateJobApplication,
  getJobApplication,
  getAllJobApplications,
  deleteJobApplication,
} from "./job-application.controller.js";

const jobApplicationRouter = Router();

jobApplicationRouter.post("/", addJobApplication);
jobApplicationRouter.put("/:id", updateJobApplication);
jobApplicationRouter.get("/:id", getJobApplication);
jobApplicationRouter.get("/", getAllJobApplications);
jobApplicationRouter.delete("/:id", deleteJobApplication);

export default jobApplicationRouter;
