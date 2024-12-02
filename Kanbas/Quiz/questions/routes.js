import * as questionDao from "./dao.js";

//Unsure about the routes to be "api/questions", need revise
//Todo: add more necessary routes
export default function QuestionRoutes(app) {
    const findAllQuestions = async (req, res) => {
        const questions = await questionDao.findAllQuestions();
        res.json(questions);
    }
    app.get("/api/questions", findAllQuestions);

    const createQuestion = async (req, res) => {
        const question = await questionDao.createQuestion(req.body);
        res.json(question);
      };
    app.post("/api/questions", createQuestion);

    const findQuestionById = async (req, res) => {
        const question = await questionDao.findQuestionById(req.params.questionId)
        res.json(question)
    }
    app.get("/api/questions/:questionId", findQuestionById);
    
}