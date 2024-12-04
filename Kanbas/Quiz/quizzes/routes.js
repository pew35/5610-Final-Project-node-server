import * as quizDao from "./dao.js";

export default function QuizRoutes(app) {
    // Get all quizzes
    const findAllQuizzes = async (req, res) => {
        const quizzes = await quizDao.findAllQuizzes();
        res.json(quizzes);
    };
    app.get("/api/quizzes", findAllQuizzes);

    // Create a new quiz
    const createQuiz = async (req, res) => {
        const quiz = await quizDao.createQuiz(req.body);
        res.json(quiz);
    };
    app.post("/api/quizzes", createQuiz);

    // Get a quiz by ID
    const findQuizById = async (req, res) => {
        const quiz = await quizDao.findQuizById(req.params.quizId);
        res.json(quiz);
    };
    app.get("/api/quizzes/:quizId", findQuizById);

    // Update a quiz by ID
    const updateQuizById = async (req, res) => {
        const updatedQuiz = await quizDao.updateQuizById(
            req.params.quizId,
            req.body
        );
        res.json(updatedQuiz);
    };
    app.put("/api/quizzes/:quizId", updateQuizById);

    // Delete a quiz by ID
    const deleteQuizById = async (req, res) => {
        await quizDao.deleteQuizById(req.params.quizId);
        res.sendStatus(200);
    };
    app.delete("/api/quizzes/:quizId", deleteQuizById);
}
