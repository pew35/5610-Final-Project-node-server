import * as questionDao from "./dao.js";
import * as quizDao from "../quizzes/dao.js"

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

    const updateQuizPoints = async (quizId) => {
        try {
            console.log('quizid is', quizId)
            const allQuestions = await questionDao.findQuestionByQuiz(quizId);
            // console.log("question found: ", allQuestions)
            if (!Array.isArray(allQuestions)) {
                throw new Error("Questions not found or invalid response.");
            }
            const totalPoints = allQuestions.reduce((sum, question) => sum + (question.points || 0), 0);
            await quizDao.updateQuiz(quizId, { points: totalPoints });
            console.log(`Updated total points for quizId=${quizId}: ${totalPoints}`);
        } catch (error) {
            console.error(`Error updating quiz points for quizId=`, error);
        }
    };

    const updateQuizQuestionCount = async (quizId) => {
        try {
            console.log('quizId is', quizId);
            const allQuestions = await questionDao.findQuestionByQuiz(quizId);
    
            if (!Array.isArray(allQuestions)) {
                throw new Error("Questions not found or invalid response.");
            }
    
            const questionCount = allQuestions.length; // Count the number of questions
            await quizDao.updateQuiz(quizId, { numberOfQuestions: questionCount }); // Update with question count
    
            console.log(`Updated question count for quizId=${quizId}: ${questionCount}`);
        } catch (error) {
            console.error(`Error updating question count for quizId=${quizId}:`, error);
        }
    };

    const createQuestion = async (req, res) => {
        const { quizId } = req.params;
        console.log("Creating question: for quiz id", req.params, req.body)
        const question = await questionDao.createQuestion(req.body);
        // update quiz points if question is added
        await updateQuizPoints(quizId);
        await updateQuizQuestionCount(quizId);
        res.json(question);
    }
    app.post("/api/quizzes/:quizId/questions", createQuestion);
    
    const updateQuestion = async (req, res) => {
        const { quizId, questionId } = req.params;
        let question = req.body;
        console.log("Updating question ", quizId , questionId, question)
        question = await questionDao.updateQuestion(questionId, question);
        // update quiz points in case question point is  modified
        await updateQuizPoints(quizId);
        await updateQuizQuestionCount(quizId);
        res.json(question);
    }
    app.put('/api/quizzes/:quizId/questions/:questionId', updateQuestion);

    const deleteQuestion = async (req, res) => {
        const { quizId, questionId } = req.params;
        await questionDao.deleteQuestion(questionId);
        // update quiz points in case question is deleted
        await updateQuizPoints(quizId);
        await updateQuizQuestionCount(quizId);
        console.log("Deleting question ID successfully:", req.params.questionId);
    }
    app.delete('/api/quizzes/:quizId/questions/:questionId', deleteQuestion);
}
