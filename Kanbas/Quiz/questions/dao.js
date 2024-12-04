import model from "./model.js";

// Retrieve all questions
export const findAllQuestions = () => model.find();

// Create a new question
export const createQuestion = (question) => model.create(question);

// Find a question by ID
export const findQuestionById = (questionId) => model.findById(questionId);

// Find questions by quiz ID
export const findQuestionsByQuizId = (quizId) => model.find({ quizId: quizId });
