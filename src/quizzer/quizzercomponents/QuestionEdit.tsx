import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Question } from "../../interfaces/question";

interface questionEditInterface {
    question: Question;
    setQuestion: (id: number, aQuestion: Question) => void;
}

export function QuestionEdit({
    question,
    setQuestion
}: questionEditInterface): JSX.Element {
    return (
        <Form.Control
            value={question.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuestion(question.id, {
                    ...question,
                    name: event.target.value
                })
            }
        />
    );
}

//export function deleteQuestion
