import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    publish: {type:Boolean, default: false},
    attempts: Number,
    availableDate: String,
    availableUntilDate: String,
    dueDate: String,
    points: Number,
    numberOfQuestions: Number,
    timeLimit: Number,
    courseId: String
  },
  { collection: "quizzes" }
);
export default quizSchema;