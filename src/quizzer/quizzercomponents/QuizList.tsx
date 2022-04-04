import React from "react";
import { Stack } from "react-bootstrap";
import { Quiz } from "../quizzerinterfaces/quiz";
//import { QuizQuestion } from "../quizzerinterfaces/quizquestion";
import { QuizView } from "./QuizView";
//import { QuizEdit } from "./QuizEdit";

export function QuizList({
    quizzes,
    deleteQuiz
}: {
    quizzes: Quiz[];
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.title} className="bg-light border m-2 p-2">
                    <QuizView quiz={quiz} deleteQuiz={deleteQuiz}></QuizView>
                </div>
            ))}
        </Stack>
    );
}
