import * as questionDao from "./dao.js";

//Unsure about the routes to be "api/questions", need revise
//Todo: add more necessary routes
export default function QuestionRoutes(app) {
    const findAllQuestions = async (req, res) => {
        const questions = await questionDao.findAllQuestions();
        res.json(questions);
    }
    app.get("/api/questions", findAllQuestions);

    const findQuestionByQuiz = async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionDao.findQuestionByQuiz(quizId);
        res.json(questions);
    }
    app.get('/api/quizzes/:quizId/questions', findQuestionByQuiz)

    const findQuestionById = async (req, res) => {
        const { questionId } = req.params;
        const question = await questionDao.findQuestionById(questionId)
        res.json(question)
    }
    app.get("/api/questions/:questionId", findQuestionById);

    const createQuestion = async (req, res) => {
        const question = await questionDao.createQuestion(req.body);
        res.json(question);
    }
    app.post("/api/questions", createQuestion);
    
    const updateQuestion = async (req, res) => {
        const { questionId } = req.params;
        let question = req.body;
        question = await questionDao.updateQuestion(questionId, question);
        res.json(question);
    }
    app.put('/api/quizzes/:quizId/questions/:questionId', updateQuestion);

    const deleteQuestion = async (req, res) => {
        const { questionId } = req.params;
        await questionDao.deleteQuestion(questionId);
    }
    app.delete('/api/quizzes/:quizId/questions/:questionId', deleteQuestion);

}