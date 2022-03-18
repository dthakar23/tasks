import { Quiz } from "../quizzerinterfaces/quiz";
import React from "react";
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { QuestionList } from "./QuestionList";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function viewQuiz(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <p>{quiz.title}</p>
            <div>
                <Button onClick={viewQuiz}>Open/Close</Button>
            </div>
            <div>
                <h6>{quiz.description}</h6>
                <h6>{"Total Questions: " + quiz.questionTotal}</h6>
            </div>
            <Col>
                <QuestionList questions={quiz.questions}></QuestionList>
            </Col>
        </div>
    );
}
