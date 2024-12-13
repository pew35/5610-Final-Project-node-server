import mongoose from "mongoose";

const attemptsSchema = new mongoose.Schema({
    _id: String,
    date: String,
    score: Number, 
    answerId: [{ type: mongoose.Schema.Types.String, ref: "AttemptAnswerModel" }],
    quizId: { type: mongoose.Schema.Types.String, ref: "QuizModel", required: true },
    userId: { type: mongoose.Schema.Types.String, ref: "UserModel", required: true },
    attemptNumber: Number
  },
  { collection: "attempts" }
);
export default attemptsSchema;