import model from "./model.js";

//Todo: implement necessary functions
export const findAllAttemptAnswers = () => model.find();
export const findAttemptAnswersByQuestion = (questionId) => model.find({questionId})
export const findAttemptAnswersByAttempt = (attemptId) => model.find({attemptId})
