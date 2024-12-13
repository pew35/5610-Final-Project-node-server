import * as attemptDao from "./dao.js";

//Todo: need more specification on the routes
export default function AttemptRoutes(app) {
    const findAllAttempts = async (req, res) => {
        const attempts = await attemptDao.findAllAttempts();
        res.json(attempts);
    }
    app.get("/api/attempts", findAllAttempts);

    const createAttempt = async (req, res) => {
        try {
            const attempt = await attemptDao.createAttempt(req.body);
            res.status(201).json(attempt);
        } catch (error) {
            console.error("Error creating attempt:", error);
            res.status(500).send("Error creating attempt");
        }
    };
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
    app.get("/api/quizzes/:quizId/attempts", findAttemptByQuizId)


    const findAttemptByUserAndQuiz = async (req, res) => {
        const { userID: userId, quizID: quizId } = req.params; 
        if (!userId || !quizId) {
            console.log(userId, quizId,"hello");
            return res.status(404).send({ error: "userId and quizId are required" });
        }
        try {
            const attempts = await attemptDao.findAttemptByUserAndQuiz(userId, quizId);
            res.json(attempts);
        } catch (error) {
            res.status(500).send("Error fetching attempts");
        }
        
    }
    app.get(`/api/quizzes/:quizID/:userID/attempts`, findAttemptByUserAndQuiz);

    const findLatestAttemptByUserAndQuiz = async (req, res) => {
        const { userID: userId, quizID: quizId } = req.params; 
        if (!userId || !quizId) {
            console.log(userId, quizId,"hello");
            return res.status(404).send({ error: "userId and quizId are required" });
        }
        try {
            const attempts = await attemptDao.findLatestAttemptByUserAndQuiz(userId, quizId);
            res.json(attempts);
        } catch (error) {
            res.status(500).send("Error fetching attempts");
        }
        
    }
    app.get(`/api/quizzes/:quizID/:userID/latestattempts`, findLatestAttemptByUserAndQuiz);

    const updateAttempt = async (req, res) => {
        const { attemptId } = req.params; // Extract attemptId from the request parameters
        const updates = req.body; // The updates being passed in the request body
        try {
            const updatedAttempt = await attemptDao.updateAnswers(attemptId, updates);
            if (updatedAttempt) {
                res.json(updatedAttempt);
            } else {
                res.status(404).send({ error: "Attempt not found" });
            }
        } catch (error) {
            res.status(500).send("Error updating answers");
        }
    };
    app.put("/api/attempts/:attemptId/answers", updateAttempt);

}