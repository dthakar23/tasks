import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {(questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )) ||
                (questionType === "multiple_choice_question" && (
                    <div>Multiple Choice</div>
                ))}
        </div>
    );
}
