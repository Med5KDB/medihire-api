import { JobOffer } from "./job-offer.model.js";
import { isValidObjectId } from "mongoose";

const addJobOffer = async (req, res) => {
  const data = req.body;
  try {
    const createdJobOffer = await JobOffer.create(data);
    res.json(createdJobOffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJobOffer = async (req, res) => {
  const jobOfferId = req.params.id;
  if (!isValidObjectId(jobOfferId)) {
    return res.status(400).json({ message: "Invalid job offer ID" });
  }

  const data = req.body;

  try {
    const updated = await JobOffer.updateOne(
      { _id: jobOfferId },
      {
        $set: data,
      }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getJobOffer = async (req, res) => {
  const jobOfferId = req.params.id;
  if (!isValidObjectId(jobOfferId)) {
    return res.status(400).json({ message: "Invalid job offer ID" });
  }

  try {
    const jobOffer = await JobOffer.findById(jobOfferId);
    res.json(jobOffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllJobOffers = async (req, res) => {
  const jobOffers = await JobOffer.find();
  res.json(jobOffers);
};
const deleteJobOffer = async (req, res) => {
  const id = req.params.id;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid job offer ID" });
  }

  try {
    const deleted = await JobOffer.deleteOne({ _id: id });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  addJobOffer,
  updateJobOffer,
  getJobOffer,
  getAllJobOffers,
  deleteJobOffer,
};
