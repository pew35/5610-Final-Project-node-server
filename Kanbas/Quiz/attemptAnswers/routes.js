import * as attemptAnswerDao from "./dao.js";

//Todo: need to be edited according to actual usage
export default function AttemptAnswerRoutes(app) {
    const findAllAttemptAnswers = async (req, res) => {
        const attemptAnswers = await attemptAnswerDao.findAllAttemptAnswers();
        res.json(attemptAnswers);
    }
    app.get("/api/attemptAnswers", findAllAttemptAnswers);

    const findAttemptAnswersByQuestion = async (req, res) => {
        const {questionId} = req.params;
        const attemptAnswers = await attemptAnswerDao.findAttemptAnswersByQuestion(questionId);
        res.json(attemptAnswers);
    }
    app.get("/api/questions/:questionId/attemptAnswers", findAttemptAnswersByQuestion);

    const findAttemptAnswersByAttempt = async (req, res) => {
        const {attemptId} = req.params;
        console.log(attemptId);
        const attemptAnswers = await attemptAnswerDao.findAttemptAnswersByAttempt(attemptId);
        console.log("attemptAnswers for latest: ",attemptAnswers);
        res.json(attemptAnswers);
    }
    app.get("/api/attempts/:attemptId/attemptAnswers", findAttemptAnswersByAttempt);

    const saveAnswer = async (req, res) => {
        const answerData = req.body; // Extract answer data from the request body
        try {
            const savedAnswer = await attemptAnswerDao.saveAnswer(answerData); // Call DAO method to save answer
            res.status(201).json(savedAnswer); // Respond with the saved answer and status 201
        } catch (error) {
            console.error("Error saving answer:", error);
            res.status(500).send("Error saving answer");
        }
    };

    // POST route for saving an answer
    app.post('/api/attemptAnswers', saveAnswer);
}