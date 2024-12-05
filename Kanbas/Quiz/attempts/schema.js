import mongoose from "mongoose";

const attemptsSchema = new mongoose.Schema({
    _id: String,
    quizId: { type: mongoose.Schema.Types.String, ref: "QuizModel", required: true },
    answerId: [{ type: mongoose.Schema.Types.String, ref: "AttemptAnswerModel" }],
    date: String,
    score: Number, 
    userId: { type: mongoose.Schema.Types.String, ref: "UserModel", required: true },
  },
  { collection: "attempts" }
);
export default attemptsSchema;