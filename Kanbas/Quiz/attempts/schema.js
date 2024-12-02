import mongoose from "mongoose";

const attemptsSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    quizID: { type: mongoose.Schema.Types.String, ref: "QuizModel", required: true },
    answerID: [{ type: mongoose.Schema.Types.String, ref: "AttemptAnswerModel" }],
    date: String,
    score: Number, 
    userID: { type: mongoose.Schema.Types.String, ref: "UserModel", required: true },
  },
  { collection: "attempts" }
);
export default attemptsSchema;