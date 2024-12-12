import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    _id: String,
    quizId: { type: mongoose.Schema.Types.String, ref: "QuizModel" }, 
    courseId: { type: mongoose.Schema.Types.String, ref: "CourseModel" }, 
    answer: [{ type: String }],
    //For multiple choice, options are "a", "b", "c"
    //For True or False, options are "true", "false", case insensitive
    //For Fill in the blank, options are empty
    option: [{ type: String }],
    question: String,
    type: String,
    points: Number,
    title: String,
  },
  { collection: "questions" }
);
export default questionSchema
