import * as attemptDao from "./dao.js";

//Todo: need more specification on the routes
export default function AttemptRoutes(app) {
    const findAllAttempts = async (req, res) => {
        const attempts = await attemptDao.findAllAttempts();
        res.json(attempts);
    }
    app.get("/api/attempts", findAllAttempts);

    const createAttempt = async (req, res) => {
        const attempt = await attemptDao.createAttempt(req.body);
        res.json(attempt);
      };
    //url to be edited to match front end
    app.post("/api/attempts", createAttempt);

    const findAttemptById = async (req, res) => {
        const attempt = await attemptDao.findAttemptById(req.params.attemptId)
        res.json(attempt)
    }
    app.get("/api/attempts/:attemptId", findAttemptById);
    
    const findAttemptByQuizId = async (req, res) => {
        const quizId = req.params.quizId
        const attempts = await attemptDao.findAttemptByQuizId(quizId)
        res.json(attempts)
    }
    app.get("/api/quizzes:quizId/attempts", findAttemptByQuizId)


    const findAttemptByUserAndQuiz = async (req, res) => {
        const { userId, quizId } = req.body; 
        if (!userId || !quizId) {
            return res.status(400).send({ error: "userId and quizId are required" });
        }
        try {
            const attempts = await findAttemptByUserAndQuiz(userId, quizId);
            res.json(attempts);
        } catch (error) {
            res.status(500).send("Error fetching attempts");
        }
    }
    app.get(`/api/attempts`, findAttemptByUserAndQuiz);


}