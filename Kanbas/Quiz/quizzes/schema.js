import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    publish: Boolean,
    attempts: Number,
    availableDate: String,
    availableUntilDate: String,
    dueDate: String,
    points: Number,
    numberOfQuestions: Number,
    timeLimit: Number
  },
  { collection: "quizzes" }
);
export default quizSchema;