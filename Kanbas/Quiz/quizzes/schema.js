import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        publish: { type: Boolean, default: false },
        attempts: { type: Number, default: 0 },
        availableDate: { type: String },
        availableUntilDate: { type: String },
        dueDate: { type: String },
        points: { type: Number, default: 0 },
        numberOfQuestions: { type: Number, default: 0 },
        timeLimit: { type: Number }, // in minutes, optional
    },
    { collection: "quizzes" }
);

export default quizSchema;
