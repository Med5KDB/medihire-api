import { JobApplication } from "./job-application.model.js";
import { isValidObjectId } from "mongoose";

const addJobApplication = async (req, res) => {
  const data = req.body;
  try {
    const createdJobApplication = await JobApplication.create(data);
    res.json(createdJobApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJobApplication = async (req, res) => {
  const jobApplicationId = req.params.id;
  if (!isValidObjectId(jobApplicationId)) {
    return res.status(400).json({ message: "Invalid job application ID" });
  }

  const data = req.body;

  try {
    const updated = await JobApplication.updateOne(
      { _id: jobApplicationId },
      {
        $set: data,
      }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getJobApplication = async (req, res) => {
  const jobApplicationId = req.params.id;
  if (!isValidObjectId(jobApplicationId)) {
    return res.status(400).json({ message: "Invalid job application ID" });
  }

  try {
    const jobApplication = await JobApplication.findById(jobApplicationId);
    res.json(jobApplication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllJobApplications = async (req, res) => {
  const jobApplications = await JobApplication.find();
  res.json(jobApplications);
};
const deleteJobApplication = async (req, res) => {
  const id = req.params.id;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid job application ID" });
  }

  try {
    const deleted = await JobApplication.deleteOne({ _id: id });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  addJobApplication,
  updateJobApplication,
  getJobApplication,
  getAllJobApplications,
  deleteJobApplication,
};
