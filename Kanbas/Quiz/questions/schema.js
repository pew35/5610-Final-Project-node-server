import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        _id: String,
        quizId: { type: mongoose.Schema.Types.String, ref: "QuizModel", required: true },
        answer: { type: String, required: true },
        // Options for multiple-choice, true/false, or fill-in-the-blank
        options: [{ type: String }],
        question: { type: String, required: true },
        type: {
            type: String,
            enum: ["multiple-choice", "true-false", "fill-in-the-blank"],
            required: true,
        },
        points: { type: Number, default: 0 },
    },
    { collection: "questions" }
);

export default questionSchema;
