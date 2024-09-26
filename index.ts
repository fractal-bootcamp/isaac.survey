import express from "express";
import path from "path";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

const port = 3001;

// Prisma client
const prisma = new PrismaClient();

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

const surveys = []; // all the surveys that exist
const surveyResults: AgeSurveyResult[] = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public" + "/index.html");
});

app.get("/results", (req, res) => {
  res.json(surveyResults);
});

app.post("/", async (req, res) => {
  console.log("hello im in post");

  surveyResults.push(req.body);
  console.log("Survey Results:", surveyResults);

  try {
    const addResponse = await prisma.responses.create({
      data: {
        Name: req.body.name,
        Response: req.body.age,
      },
    });
    console.log(addResponse);
  } catch (error) {
    console.error("Error saving response:", error);
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
