import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
const port = 3001;

interface AgeSurveyResult {
  name: string;
  age: string;
}

type Question = string;
type Answer = string;

type SurveyResult = Record<Question, Answer>;

interface Survey {
  questions: Question[];
}

// all the surveys that exist
const surveys = [];

const surveyResults: AgeSurveyResult[] = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public" + "/index.html");
});

app.get("/results", (req, res) => {
  res.json(surveyResults);
});

app.post("/", (req, res) => {
  console.log("hello im in post");
  // get the form data
  surveyResults.push(req.body);
  console.log(surveyResults);
  // and put it into messages
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
