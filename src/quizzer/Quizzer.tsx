import React from "react";
import { QuizList } from "./quizzercomponents/QuizList";
import { QuizView } from "./quizzercomponents/QuizView";
import { Quiz } from "./quizzerinterfaces/quiz";
import myQuizzes from "/Users/dishathakar/tasks/src/quizzer/quizData.json";

const allQuizzes = myQuizzes.map((myquiz): Quiz => ({ ...myquiz }));

export function Quizzer(): JSX.Element {
    return (
        <h3>
            <QuizList quizzes={myQuizzes}></QuizList>
        </h3>
    );
}
