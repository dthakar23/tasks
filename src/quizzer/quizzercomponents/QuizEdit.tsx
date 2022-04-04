import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quiz } from "../quizzerinterfaces/quiz";
//import { QuizQuestion } from "../quizzerinterfaces/quizquestion";

export function QuizEdit({
    quiz,
    deleteQuiz,
    flipEditMode
}: {
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    flipEditMode: () => void;
}): JSX.Element {
    function reOpenDeleted() {
        flipEditMode();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Button onClick={() => deleteQuiz(quiz.id)}></Button>
                    <Button onClick={reOpenDeleted}>
                        ReOpen Deleted Question
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
