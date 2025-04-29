import { Router } from "express";
import {
  addJobOffer,
  updateJobOffer,
  getJobOffer,
  getAllJobOffers,
  deleteJobOffer,
} from "./job-offer.controller.js";

const jobOfferRouter = Router();

jobOfferRouter.post("/", addJobOffer);
jobOfferRouter.put("/:id", updateJobOffer);
jobOfferRouter.get("/:id", getJobOffer);
jobOfferRouter.get("/", getAllJobOffers);
jobOfferRouter.delete("/:id", deleteJobOffer);

export default jobOfferRouter;
