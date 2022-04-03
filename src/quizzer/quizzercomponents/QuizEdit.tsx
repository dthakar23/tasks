import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Quiz } from "../quizzerinterfaces/quiz";
import { QuizQuestion } from "../quizzerinterfaces/quizquestion";

export const QuizEdit = ({
    quiz,
    deleteQuiz,
    editQuiz,
    flipEditMode
}: {
    quiz: Quiz;
    deleteQuiz: (id: number) => void;
    flipEditMode: () => void;
    editQuiz: (id: number, aQuiz: Quiz) => void;
}) => {
    return (
        <div>
            <Button variant="danger" onClick={() => deleteQuiz(quiz.id)}>
                Delete Quiz
            </Button>
        </div>
    );
};
