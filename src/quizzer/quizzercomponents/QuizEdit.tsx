import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../quizzerinterfaces/quiz";
import { QuizQuestion } from "../quizzerinterfaces/quizquestion";

export function QuizEdit({
    quiz,
    deleteQuiz,
    flipEditMode
}: //editQuiz
{
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    //editQuiz: (id: number, aQuiz: Quiz) => void;
    flipEditMode: () => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    );
}
