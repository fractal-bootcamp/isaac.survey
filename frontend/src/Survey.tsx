
export type AnswerType = {
    id: number,
    questionId: number,
    value: string,
}

export type ResponseType = {
    id: number,
    surveyId: number
    answers: AnswerType[]
}

export type QuestionType = {
    id: number,
    name: string,
    surveyId: number
    answers: AnswerType[]
}

export type SurveyType = {
    id: number,
    name: string,
    questions: QuestionType[],
    responses: ResponseType[],
}

function Answer({ answer }: { answer: AnswerType }) {
    return (
        <div>{answer.id}: {answer.value}</div>
    )
}

function Question({ question, mode }: { question: QuestionType, mode: 'answer' | 'edit' | 'view' }) {

    if (mode === 'view') {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            {question.name}
            {question.answers.map((answer) => {
                return <Answer answer={answer} />
            })}
        </div>
    )
}

function Survey({ survey, mode }: { survey: SurveyType, mode: 'answer' | 'edit' | 'view' }) {

    return (
        <div>
            {survey.name}
            {survey.questions.map(
                (question) => {
                    return <Question question={question} mode={mode} />
                })
            }
        </div>
    )
}

export default Survey