import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    instructions: String,
    publish: {type: Boolean, default: false},
    attempts: Number,
    availableDate: String,
    availableUntilDate: String,
    dueDate: String,
    points: Number,
    numberOfQuestions: Number,
    timeLimit: Number,
    courseId: String,
    quizType: {
        type: String, 
        enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
        default: 'Graded Quiz'
    },
    assignmentGroup: {
        type: String,
        enum: ['Quizzes','Exams', 'Assignments', 'Project'],
        default: 'Quizzes'
    },
    shuffleAnswers: {type: Boolean, default: false},
    viewResponses: { type: String, default: 'Always' },
    showCorrectAnswers: { type: String, default: 'Immediately' },
    oneQuestionAtATime: { type: Boolean, default: true },
    requireRespondusLockDown: { type: Boolean, default: false },
    requiredToViewResults: { type: Boolean, default: false },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false }
}, 
{ collection: "quizzes" }
);

export default quizSchema;