import mongoose from "mongoose";

const attemptAnswersSchema = new mongoose.Schema({
    _id: String,
    isCorrect: Boolean, 
    answer: [{ type: String }],
    attemptId: { type: mongoose.Schema.Types.String, ref: "AttemptModel", required: true },
    questionId: { type: mongoose.Schema.Types.String, ref: "QuestionModel", required: true },
    },
  { collection: "attemptAnswers" }
);
export default attemptAnswersSchema;