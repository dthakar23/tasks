import React from "react";
import { Stack } from "react-bootstrap";
import { QuizQuestion } from "../quizzerinterfaces/quizquestion";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    showPublished
}: //addPoints
{
    questions: QuizQuestion[];
    showPublished: boolean;
    //addPoints: (pointsAdded: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: QuizQuestion) => (
                <h5 key={question.name}>
                    <QuestionView
                        question={question}
                        showPublished={showPublished} /*addPoints={addPoints}*/
                    ></QuestionView>
                </h5>
            ))}
        </Stack>
    );
}
