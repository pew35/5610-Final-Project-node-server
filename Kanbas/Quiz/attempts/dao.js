import model from "./model.js";

//Implemented some necessary functions for now
//All can be modified based on actual needs
export const findAllAttempts = () => model.find();
export const createAttempt = (attempt) => {
    return model.create(attempt)
};
export const findAttemptById = (attemptId) => model.findById(attemptId);
export const findAttemptByQuizId = (quizId) => {
    return model.find({quizId: quizId})
};
export const findAttemptByUserAndQuiz = async (userId, quizId) => {
    return model.find({ userId, quizId });
};
