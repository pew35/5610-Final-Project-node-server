import model from "./model.js";

//Implemented some necessary functions for now
//All can be modified based on actual needs
export const findAllQuestions = () => model.find();
export const findQuestionByQuiz = (quizId) => model.find({ quizId: quizId });
export const findQuestionById = (questionId) => model.findById(questionId);
//not sure if needed or not
//export const findQuestionsByType = (type, quizID) => model.find({ questionType: type, quizID: quizID });
export const createQuestion = (quizId, question) => {
    question.quizID = quizId;
    return model.create(question)
};
export const deleteQuestion = (id) => model.deleteOne({ _id: id });
export const updateQuestion = (id, question) => model.updateOne({ _id: id }, { $set: question });
