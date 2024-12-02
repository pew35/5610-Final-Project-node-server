import * as attemptAnswerDao from "./dao.js";

//Todo: need to be edited according to actual usage
export default function AttemptAnswerRoutes(app) {
    const findAllAttemptAnswers = async (req, res) => {
        const attemptAnswers = await attemptAnswerDao.findAllAttemptAnswers();
        res.json(attemptAnswers);
    }
    app.get("/api/attemptAnswers", findAllAttemptAnswers);

}