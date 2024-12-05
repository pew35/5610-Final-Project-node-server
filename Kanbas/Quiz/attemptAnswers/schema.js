import mongoose from "mongoose";

const attemptAnswersSchema = new mongoose.Schema({
    _id: String,
    attemptId: { type: mongoose.Schema.Types.String, ref: "AttemptModel", required: true },
    isCorrect: Boolean, 
    questionId: { type: mongoose.Schema.Types.String, ref: "QuestionModel", required: true },
    answer: [{ type: String }],
    },
  { collection: "attemptAnswers" }
);
export default attemptAnswersSchema;