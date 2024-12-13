import * as quizDao from "./dao.js";

//Todo: add more necessary routes
export default function QuizRoutes(app) {
    const findAllQuizzes = async (req, res) => {
        const quizzes = await quizDao.findAllQuizzes();
        res.json(quizzes);
    }
    app.get("/api/quizzes", findAllQuizzes);

    const createQuiz = async (req, res) => {
        const { courseId } = req.params;
        const quiz = await quizDao.createQuiz(courseId, req.body);
        res.json(quiz);
    };
    app.post("/api/quizzes", createQuiz);

    const findQuizById = async (req, res) => {
        const quiz = await quizDao.findQuizById(req.params.quizId)
        res.json(quiz)
    }
    app.get("/api/courses/:courseId/quizzes/:quizId", findQuizById);
    app.get("/api/quizzes/:quizId", findQuizById);

    const findQuizesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const { published } = req.query;
        
        if (published === 'true') {
            
            const quizes = await quizDao.findPublishedQuizesForCourse(courseId);
            console.log(quizes);
            res.json(quizes);
            return;
        }

        const quizes = await quizDao.findQuizesForCourse(courseId);
        res.json(quizes);
    }
    app.get("/api/courses/:courseId/quizzes", findQuizesForCourse)

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        let quiz = req.body;
        quiz = await quizDao.updateQuiz(quizId, quiz);
        res.json(quiz);
    }
    app.put("/api/quizzes/:quizId", updateQuiz);

    const deleteQuiz = async (req, res) => {
        const { quizId } = req.params;
        await quizDao.deleteQuiz(quizId);
    }
    app.delete("/api/quizzes/:quizId", deleteQuiz);

    const publishQuiz = async (req, res) => {
        const { quizId } = req.params;
        const quiz = await quizDao.findQuizById(quizId);
        quiz.publish = true;
        await quizDao.updateQuiz(quizId, quiz);
        res.json(quiz);
    }
    app.get("/api/quizzes/:quizId/publish", publishQuiz);

    const unpublishQuiz = async (req, res) => {
        const { quizId } = req.params;
        const quiz = await quizDao.findQuizById(quizId);
        quiz.publish = false;
        await quizDao.updateQuiz(quizId, quiz);
        res.json(quiz);
    }
    app.get("/api/quizzes/:quizId/unpublish", unpublishQuiz);

    const updateQuizPoints = async (quizId) => {
        // Get all questions for the quiz
        const allQuestions = await questionDao.getQuestionsByQuizId(quizId);
        // Calculate the total points
        const totalPoints = allQuestions.reduce((sum, question) => sum + (question.points || 0), 0);
        // Update the quiz's totalPoints
        await quizDao.updateQuiz(quizId, { totalPoints });
        console.log(`Updated total points for quiz ${quizId}: ${totalPoints}`);
    };

}
