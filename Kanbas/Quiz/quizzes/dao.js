import model from "./model.js";

//Implemented some necessary functions for now
//All can be modified based on actual needs
export const findAllQuizzes = () => model.find();
export const createQuiz = (quiz) => {
    //Todo: Finish create quiz with necessary quizId and other fields
    return model.create(quiz)
};
export const findQuizById = (quizId) => model.findById(quizId);
