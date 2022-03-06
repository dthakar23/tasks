import { check } from "prettier";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftRoll, inLeftRoll] = useState<number>(6);
    const [rightRoll, inRightRoll] = useState<number>(1);

    return (
        <div>
            <Button onClick={() => inLeftRoll(d6)}>Roll Left</Button>
            <Button onClick={() => inRightRoll(d6)}>Roll Right</Button>
            <div>
                <span data-testid="left-die">{leftRoll} </span>
                <span data-testid="right-die">{rightRoll} </span>
            </div>
            <div>
                {leftRoll === rightRoll && leftRoll !== 1 ? (
                    <span>Yay, you Win!</span>
                ) : (
                    <span>Aw, you Lose!</span>
                )}
            </div>
        </div>
    );
}
