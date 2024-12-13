import model from "./model.js";

//Todo: implement necessary functions
export const findAllAttemptAnswers = () => model.find();
export const findAttemptAnswersByQuestion = (questionId) => model.find({questionId})

export const findAttemptAnswersByAttempt = (attemptId) => model.find({attemptId : attemptId})

export const saveAnswer = async (answerData) => {
    try {
        model.create(answerData);
    } catch (error) {
        console.error("Error saving answer in DAO:", error);
        throw error; // Rethrow the error for handling in the route
    }
};

