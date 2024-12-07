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
        const attemptAnswers = await attemptAnswerDao.findAttemptAnswersByAttempt(attemptId);
        res.json(attemptAnswers);
    }
    app.get("/api/attempts/:attemptId/attemptAnswers", findAttemptAnswersByAttempt);
}