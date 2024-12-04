import express from 'express';
import Hello from "./Hello.js"
import Lab5 from './Lab5/index.js';
import WorkingWithObjects from './Lab5/WorkingWithObjects.js';
import WorkingWithArrays from './Lab5/WorkingWithArrays.js';
import UserRoutes from "./Kanbas/Users/routes.js";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import mongoose from "mongoose";
import QuizRoutes from './Kanbas/Quiz/quizzes/routes.js';
import QuestionRoutes from './Kanbas/Quiz/questions/routes.js';
import AttemptRoutes from './Kanbas/Quiz/attempts/routes.js';
import AttemptAnswerRoutes from './Kanbas/Quiz/attemptAnswers/routes.js';

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
}
));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  

app.use(express.json());
Hello(app);
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
AttemptRoutes(app);
AttemptAnswerRoutes(app);
app.listen(process.env.PORT || 4000);
