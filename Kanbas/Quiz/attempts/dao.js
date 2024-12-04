import model from "./model.js";

// Retrieve all attempts
export const findAllAttempts = () => model.find();

// Create a new attempt
export const createAttempt = (attempt) => model.create(attempt);

// Find an attempt by ID
export const findAttemptById = (attemptId) => model.findById(attemptId);

// Find attempts by quiz ID
export const findAttemptByQuizId = (quizId) => model.find({ quizID: quizId });
