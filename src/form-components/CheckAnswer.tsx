import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function compareAnswer(event: ChangeEvent) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Check your answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={compareAnswer} />
            </Form.Group>
            <option>Your answer is: </option>
            {givenAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
