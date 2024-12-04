import * as questionDao from "./dao.js";

export default function QuestionRoutes(app) {
    // Get all questions
    const findAllQuestions = async (req, res) => {
        const questions = await questionDao.findAllQuestions();
        res.json(questions);
    };
    app.get("/api/questions", findAllQuestions);

    // Create a new question
    const createQuestion = async (req, res) => {
        const question = await questionDao.createQuestion(req.body);
        res.json(question);
    };
    app.post("/api/questions", createQuestion);

    // Get a question by ID
    const findQuestionById = async (req, res) => {
        const question = await questionDao.findQuestionById(req.params.questionId);
        res.json(question);
    };
    app.get("/api/questions/:questionId", findQuestionById);

    // Get questions by quiz ID
    const findQuestionsByQuizId = async (req, res) => {
        const questions = await questionDao.findQuestionsByQuizId(req.params.quizId);
        res.json(questions);
    };
    app.get("/api/questions/quiz/:quizId", findQuestionsByQuizId);
}
