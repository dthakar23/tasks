import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, inProgress] = useState<boolean>(false);

    function useAttempt(): void {
        inProgress(!progress);
        setAttempt(attempt - 1);
    }

    function mulligan(): void {
        setAttempt(1 + attempt);
    }

    return (
        <div>
            <div>
                <span>{attempt}</span>
            </div>
            <div>
                <Button
                    onClick={useAttempt}
                    disabled={attempt === 0 || progress}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => inProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
                <Button onClick={mulligan} disabled={progress === true}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
