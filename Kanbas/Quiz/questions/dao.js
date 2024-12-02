import model from "./model.js";

//Implemented some necessary functions for now
//All can be modified based on actual needs
export const findAllQuestions = () => model.find();
export const createQuestion = (question) => {
    return model.create(question)
};
export const findQuestionById = (questionId) => model.findById(questionId);
