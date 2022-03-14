import { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    const OPTIONS = options;

    function answerMatch(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userAnswers">
                <Form.Select value={choice} onChange={answerMatch}>
                    {OPTIONS.map((item: string) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <option>Your answer is: </option>
            {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
