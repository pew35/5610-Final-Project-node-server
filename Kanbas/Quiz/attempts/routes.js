import * as attemptDao from "./dao.js";

export default function AttemptRoutes(app) {
    // Get all attempts
    const findAllAttempts = async (req, res) => {
        const attempts = await attemptDao.findAllAttempts();
        res.json(attempts);
    };
    app.get("/api/attempts", findAllAttempts);

    // Create a new attempt
    const createAttempt = async (req, res) => {
        const attempt = await attemptDao.createAttempt(req.body);
        res.json(attempt);
    };
    app.post("/api/attempts", createAttempt);

    // Get an attempt by ID
    const findAttemptById = async (req, res) => {
        const attempt = await attemptDao.findAttemptById(req.params.attemptId);
        res.json(attempt);
    };
    app.get("/api/attempts/:attemptId", findAttemptById);

    // Get attempts by quiz ID
    const findAttemptByQuizId = async (req, res) => {
        const attempts = await attemptDao.findAttemptByQuizId(req.params.quizId);
        res.json(attempts);
    };
    app.get("/api/attempts/quiz/:quizId", findAttemptByQuizId);
}
