import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import OldSurvey from './OldSurvey'
import Survey, { QuestionType, SurveyType } from './Survey';

const exampleQuestions: QuestionType[] = [{
  id: 1,
  name: 'what is your age?',
  surveyId: 1,
  answers: [
    {
      id: 1,
      questionId: 1,
      value: '178',
    },
    {
      id: 2,
      questionId: 1,
      value: '67',
    },
  ],
},
{
  id: 2,
  name: 'what is your name?',
  surveyId: 1,
  answers: [
    {
      id: 1,
      questionId: 1,
      value: 'fred',
    },
    {
      id: 2,
      questionId: 1,
      value: 'melinda',
    },
  ],
}
]




const exampleSurvey: SurveyType = {
  id: 1,
  name: 'Example Survey',
  questions: exampleQuestions,
  responses: [],
}


function App() {

  const [name, setName] = useState('');

  return (
    <>
      <Survey survey={exampleSurvey} />
    </>
  )
}

export default App
