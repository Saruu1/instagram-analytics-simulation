import mongoose from "mongoose";

const EngagementSchema = new mongoose.Schema({
  post: Number,
  likes: Number,
  comments: Number,
});

const AnalyticsSchema = new mongoose.Schema({
  followers: [Number],
  engagement: [EngagementSchema],
  bestPostTime: String,
});

export const Analytics =
  mongoose.models.Analytics || mongoose.model("Analytics", AnalyticsSchema);
