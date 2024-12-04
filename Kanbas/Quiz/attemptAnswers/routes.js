import * as attemptAnswerDao from "./dao.js";

export default function AttemptAnswerRoutes(app) {
    const findAllAttemptAnswers = async (req, res) => {
        const attemptAnswers = await attemptAnswerDao.findAllAttemptAnswers();
        res.json(attemptAnswers);
    };

    const findAttemptAnswerById = async (req, res) => {
        const id = req.params.id;
        const attemptAnswer = await attemptAnswerDao.findAttemptAnswerById(id);
        res.json(attemptAnswer);
    };

    const createAttemptAnswer = async (req, res) => {
        const newAttemptAnswer = req.body;
        const attemptAnswer = await attemptAnswerDao.createAttemptAnswer(newAttemptAnswer);
        res.json(attemptAnswer);
    };

    const updateAttemptAnswer = async (req, res) => {
        const id = req.params.id;
        const updatedAttemptAnswer = req.body;
        const attemptAnswer = await attemptAnswerDao.updateAttemptAnswer(id, updatedAttemptAnswer);
        res.json(attemptAnswer);
    };

    const deleteAttemptAnswer = async (req, res) => {
        const id = req.params.id;
        await attemptAnswerDao.deleteAttemptAnswer(id);
        res.sendStatus(200);
    };

    app.get("/api/attemptAnswers", findAllAttemptAnswers);
    app.get("/api/attemptAnswers/:id", findAttemptAnswerById);
    app.post("/api/attemptAnswers", createAttemptAnswer);
    app.put("/api/attemptAnswers/:id", updateAttemptAnswer);
    app.delete("/api/attemptAnswers/:id", deleteAttemptAnswer);
}
