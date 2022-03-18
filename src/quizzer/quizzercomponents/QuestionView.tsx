import { QuizQuestion } from "../quizzerinterfaces/quizquestion";
import React from "react";
export function QuestionView({
    question
}: {
    question: QuizQuestion;
}): JSX.Element {
    return (
        <div>
            <h4>{question.name}</h4>
            <div>
                <h5>{question.body}</h5>
                <h6>{"Question points: " + question.points}</h6>
            </div>
        </div>
    );
}
