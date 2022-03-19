import { QuizQuestion } from "../quizzerinterfaces/quizquestion";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function QuestionView({
    question
}: {
    question: QuizQuestion;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    const [choice, setChoice] = useState<string>(question.options[0]);

    const OPTIONS = question.options;

    function compareAnswer(event: ChangeEvent) {
        setGivenAnswer(event.target.value);
    }

    function answerMatch(event: ChangeEvent) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h4>{question.name}</h4>
            <div>
                <h5>{question.body}</h5>
                <h6>{"Question points: " + question.points}</h6>
                <h6>
                    {question.type === "short_answer" ? (
                        <div>
                            <Form.Group controlId="formAnswer">
                                <Form.Label>Check your answer:</Form.Label>
                                <Form.Control
                                    value={givenAnswer}
                                    onChange={compareAnswer}
                                />
                            </Form.Group>
                            <option>Your answer is: </option>
                            {givenAnswer === question.expected ? "✔️" : "❌"}
                        </div>
                    ) : (
                        <div>
                            <Form.Group controlId="userAnswers">
                                <Form.Select
                                    value={choice}
                                    onChange={answerMatch}
                                >
                                    {OPTIONS.map((item: string) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <option>Your answer is: </option>
                            {choice === question.expected ? "✔️" : "❌"}
                        </div>
                    )}
                </h6>
            </div>
        </div>
    );
}
