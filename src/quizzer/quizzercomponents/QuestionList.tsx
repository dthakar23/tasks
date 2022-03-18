import React from "react";
import { Stack } from "react-bootstrap";
import { QuizQuestion } from "../quizzerinterfaces/quizquestion";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions
}: {
    questions: QuizQuestion[];
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: QuizQuestion) => (
                <div key={question.name}>
                    <QuestionView question={question}></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
