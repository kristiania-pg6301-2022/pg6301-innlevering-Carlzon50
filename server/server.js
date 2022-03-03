import express from "express";
import path from "path";
import { randomQuestion, isCorrectAnswer, Questions } from "./questions.js";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send("første");
});

app.get("/api/question", (req, res) => {
  const { id, category, question, answers } = randomQuestion();
  res.json({ question, answers, id, category });
});

app.post("/api/question", (req, res) => {
  const { id, answer } = req.body;
  const question = Questions.find((q) => q.id === id);
  if (!question) {
    return res.sendStatus(404);
  }
  if (isCorrectAnswer(question, answer)) {
    res.json({ result: true });
  } else {
    res.json({ result: false });
  }
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on: http://localhost:${server.address().port}`);
});