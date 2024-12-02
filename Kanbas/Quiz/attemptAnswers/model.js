import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("AttemptAnswerModel", schema);
export default model;
