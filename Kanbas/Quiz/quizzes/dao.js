import model from "./model.js";

//Implemented some necessary functions for now
//All can be modified based on actual needs
export const findAllQuizzes = () => model.find();
export const createQuiz = (courseId, quiz) => {
    quiz.courseId = courseId;
    return model.create(quiz)
};
export const findQuizById = (quizId) => model.findById(quizId);
export const findQuizesForCourse =  (courseId) => model.find({ courseId: courseId});
export const updateQuiz =  (id, quiz) =>  model.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz =  (id) =>  model.deleteOne({ _id: id });