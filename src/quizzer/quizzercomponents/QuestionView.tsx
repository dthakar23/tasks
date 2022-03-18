import { QuizQuestion } from "../quizzerinterfaces/quizquestion";
import React from "react";
export function QuestionView({
    question
}: {
    question: QuizQuestion;
}): JSX.Element {
    return (
        <div>
            <p>{question.name}</p>
            <div>
                <h6>{question.body}</h6>
                <h6>{"Question points: " + question.points}</h6>
            </div>
        </div>
    );
}
