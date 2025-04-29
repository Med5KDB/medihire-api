import { Schema, model } from "mongoose";

const JobApplicationSchema = new Schema({
  jobOffer: {
    type: Schema.Types.ObjectId,
    ref: "JobOffer",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      validator: async function (userId) {
        const user = await this.model("User").findById(userId);
        return user && user.role === "CANDIDATE";
      },
      message: "User must have CANDIDATE role",
    },
  },
  status: {
    type: String,
    required: true,
    enum: ["PENDING", "IN_REVIEW", "INTERVIEWED", "ACCEPTED", "REJECTED"],
    default: "PENDING",
  },

  applicationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const JobApplication = model("JobApplication", JobApplicationSchema);
