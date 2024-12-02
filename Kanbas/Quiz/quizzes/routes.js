import * as quizDao from "./dao.js";

//Todo: add more necessary routes
export default function QuizRoutes(app) {
    const findAllQuizzes = async (req, res) => {
        const quizzes = await quizDao.findAllQuizzes();
        res.json(quizzes);
    }
    app.get("/api/quizzes", findAllQuizzes);

    const createQuiz = async (req, res) => {
        const quiz = await quizDao.createQuiz(req.body);
        res.json(quiz);
      };
    app.post("/api/quizzes", createQuiz);

    const findQuizById = async (req, res) => {
        const quiz = await quizDao.findQuizById(req.params.quizId)
        res.json(quiz)
    }
    app.get("/api/quizzes/:quizId", findQuizById);
    
}