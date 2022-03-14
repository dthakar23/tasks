import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "pink",
        "orange",
        "cyan",
        "magenta",
        "lime",
        "purple"
    ];
    const [chosen, setChosen] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="formChangeColor">
                <Form.Label>Pick a color:</Form.Label>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        style={{ backgroundColor: color }}
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChosen(event.target.value)}
                        id={"colors" + color}
                        label={color}
                        value={color}
                        checked={chosen === color}
                    />
                ))}
            </Form.Group>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosen }}
                >
                    {" "}
                    {chosen}
                </span>
            </div>
        </div>
    );
}
