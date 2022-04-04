import { Quiz } from "../quizzerinterfaces/quiz";
import React from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { QuestionList } from "./QuestionList";
import { QuizEdit } from "./QuizEdit";

export function QuizView({
    quiz,
    deleteQuiz
}: //editQuiz
{
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [showPublished, setShowPublished] = useState<boolean>(false);
    //const [points, setPoints] = useState<number>(0);

    function viewQuiz(): void {
        setVisible(!visible);
    }

    function flipEditMode(): void {
        setEditMode(!editMode);
    }

    function changePublished(): void {
        setShowPublished(!showPublished);
    }

    /*
    function addPoints(pointsAdded: number): void {
        setPoints(points + pointsAdded);
    }
    */

    return editMode ? (
        <QuizEdit
            quiz={quiz}
            deleteQuiz={deleteQuiz}
            flipEditMode={flipEditMode}
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
                <Button onClick={flipEditMode} variant="danger">
                    Delete
                </Button>
            </Row>
            <div>
                {visible ? (
                    <div>
                        <Button onClick={changePublished} variant="gray">
                            Filter: Click to Show Published Questions
                        </Button>
                        <QuestionList
                            questions={quiz.questions}
                            showPublished={showPublished}
                            //addPoints={addPoints}
                        ></QuestionList>
                    </div>
                ) : (
                    <Col></Col>
                )}
            </div>
        </div>
    );
}
