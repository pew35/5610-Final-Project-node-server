import * as attemptDao from "./dao.js";

//Todo: need more specification on the routes
export default function AttemptRoutes(app) {
    const findAllQuizzes = async (req, res) => {
        const attempts = await attemptDao.findAllAttempts();
        res.json(attempts);
    }
    app.get("/api/attempts", findAllQuizzes);

    const createAttempt = async (req, res) => {
        const attempt = await attemptDao.createAttempt(req.body);
        res.json(attempt);
      };
    app.post("/api/attempts", createAttempt);

    const findAttemptById = async (req, res) => {
        const attempt = await attemptDao.findAttemptById(req.params.attemptId)
        res.json(attempt)
    }
    app.get("/api/attempts/:attemptId", findAttemptById);
    
    const findAttemptByQuizId = async (req, res) => {
        const attempts = await attemptDao.findAttemptByQuizId(req.params.quizId)
        res.json(attempts)
    }
    //needs modification, not sure about the url/if needed in the program
    app.get("/api/attempts/:quizId", findAttemptByQuizId)
}