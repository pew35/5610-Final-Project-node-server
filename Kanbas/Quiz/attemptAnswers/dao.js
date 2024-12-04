import model from "./model.js";

// Retrieve all attempt answers
export const findAllAttemptAnswers = () => model.find();

// Retrieve attempt answers by ID
export const findAttemptAnswerById = (id) => model.findById(id);

// Create a new attempt answer
export const createAttemptAnswer = (attemptAnswer) => model.create(attemptAnswer);

// Update an attempt answer by ID
export const updateAttemptAnswer = (id, attemptAnswer) => 
    model.findByIdAndUpdate(id, attemptAnswer, { new: true });

// Delete an attempt answer by ID
export const deleteAttemptAnswer = (id) => model.findByIdAndDelete(id);
