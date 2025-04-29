import { model, Schema } from "mongoose";

const JobOfferSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["PENDING", "ACCEPTED", "REJECTED"],
    default: "PENDING",
  },
  publicationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const JobOffer = model("JobOffer", JobOfferSchema);
