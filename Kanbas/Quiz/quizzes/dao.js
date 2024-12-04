import model from "./model.js";

// Retrieve all quizzes
export const findAllQuizzes = () => model.find();

// Create a new quiz
export const createQuiz = (quiz) => model.create(quiz);

// Find a quiz by ID
export const findQuizById = (quizId) => model.findById(quizId);

// Update a quiz by ID
export const updateQuizById = (quizId, updatedQuiz) =>
    model.findByIdAndUpdate(quizId, updatedQuiz, { new: true });

// Delete a quiz by ID
export const deleteQuizById = (quizId) => model.findByIdAndDelete(quizId);
