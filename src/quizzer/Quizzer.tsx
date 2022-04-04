import React, { useState } from "react";
//import { QuestionList } from "./quizzercomponents/QuestionList";
import { QuizList } from "./quizzercomponents/QuizList";
import { Quiz } from "./quizzerinterfaces/quiz";
//import { QuizQuestion } from "./quizzerinterfaces/quizquestion";
import myQuizzes from "../quizzer/quizData.json";

const allQuizzes = myQuizzes.map((myquiz): Quiz => ({ ...myquiz }));

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(allQuizzes);

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    /*
    function editQuiz(id: number, aQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? aQuiz : quiz))
        );
    }
    */

    return (
        <h3>
            <QuizList
                quizzes={allQuizzes}
                deleteQuiz={deleteQuiz}
                //editQuiz={editQuiz}
            ></QuizList>
        </h3>
    );
}
