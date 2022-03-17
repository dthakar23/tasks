import { Quiz } from "../quizzerinterfaces/quiz";
import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export function QuizView({
    quiz
}: //deleteQuiz,
//editQuiz
{
    quiz: Quiz;
    //deleteQuiz: (title: string) => void;
    //editQuiz: (title: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    /*function changeEditing(){
        setEditing(!editing);
    }*/

    return (
        <div>
            <p>{quiz.title}</p>
            <div>
                <h6>{quiz.description}</h6>
                <h6>{"Total Questions: " + quiz.questionTotal}</h6>
            </div>
        </div>
    );
}
