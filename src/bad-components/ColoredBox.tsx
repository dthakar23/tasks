import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorProps {
    colorIndex: number;
    setColorIndex: (newColor: number) => void;
}

function ChangeColor({colorIndex, setColorIndex}: colorProps): JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length) && COLORS[setColorIndex]}>
            Next Color
        </Button>
    );
}

function ColorPreview({colorIndex, setColorIndex}: colorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor {colorIndex, setColorIndex}={colorIndex, setColorIndex}></ChangeColor>
                <ColorPreview {colorIndex, setColorIndex}={colorIndex, setColorIndex}></ColorPreview>
            </div>
        </div>
    );
}
