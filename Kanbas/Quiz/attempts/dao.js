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

export const findLatestAttemptByUserAndQuiz = async (userId, quizId) => {
    try {
        // Query the database for attempts matching the courseId and userId
        const latestAttempt = await model.findOne({
            quizId: quizId,
            userId: userId,
        })
            .sort({ date: -1 }) // Sort by date in descending order
            .exec(); // Execute the query

        return latestAttempt; // Returns the latest attempt or null if none found
    } catch (error) {
        console.error("Error fetching latest attempt:", error);
        throw error;
    }
};

export const updateAttempt = async (attemptId, updates) => {
    try {
        const updatedAttempt = await model.findByIdAndUpdate(
            attemptId,
            { $set: updates }, 
            { new: true, runValidators: true }
        );
        return updatedAttempt;
    } catch (error) {
        console.error("Error updating answers in DAO:", error);
        throw error; 
    }
};

