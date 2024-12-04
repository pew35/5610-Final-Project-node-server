import mongoose from "mongoose";

const attemptsSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        quizID: { type: mongoose.Schema.Types.String, ref: "QuizModel", required: true },
        answerID: [{ type: mongoose.Schema.Types.String, ref: "AttemptAnswerModel" }],
        date: { type: String, required: true }, // Could use Date type if needed
        score: { type: Number, default: 0 },
        userID: { type: mongoose.Schema.Types.String, ref: "UserModel", required: true },
    },
    { collection: "attempts" }
);

export default attemptsSchema;
