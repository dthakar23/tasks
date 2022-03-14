import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptLeft, setAttemptLeft] = useState<number>(3);
    const [attemptRequest, setAttemptRequest] = useState<number>(0);

    function useAttempt() {
        setAttemptLeft(attemptLeft - 1);
    }

    function addAttempt() {
        const newAttempts = isNaN(attemptRequest)
            ? attemptLeft
            : attemptLeft + attemptRequest;
        setAttemptLeft(newAttempts);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attemptLeft}</div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptRequest}
                    onChange={(event: ChangeEvent) =>
                        setAttemptRequest(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={addAttempt}>gain</Button>
                <Button onClick={useAttempt} disabled={attemptLeft === 0}>
                    use
                </Button>
            </div>
        </div>
    );
}
