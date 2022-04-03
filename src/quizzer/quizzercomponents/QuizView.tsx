import { Quiz } from "../quizzerinterfaces/quiz";
import React from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { QuestionList } from "./QuestionList";
import { QuizEdit } from "./QuizEdit";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    editQuiz: (id: number, aQuiz: Quiz) => void;
}): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);

    function viewQuiz(): void {
        setVisible(!visible);
    }

    function flipEditMode(): void {
        setEditMode(!editMode);
    }

    return editMode ? (
        <QuizEdit
            quiz={quiz}
            deleteQuiz={deleteQuiz}
            flipEditMode={flipEditMode}
            editQuiz={editQuiz}
        ></QuizEdit>
    ) : (
        <div>
            <p>{quiz.title}</p>
            <h4>{"Total Questions: " + quiz.questionTotal}</h4>
            <h6>{quiz.description}</h6>
            <div>
                <Button onClick={viewQuiz}>Open/Close</Button>
            </div>
            <Row>
                <Button onClick={flipEditMode} variant="yellow">
                    Edit
                </Button>
            </Row>
            <div>
                {visible ? (
                    <QuestionList questions={quiz.questions}></QuestionList>
                ) : (
                    <Col></Col>
                )}
            </div>
        </div>
    );
}
