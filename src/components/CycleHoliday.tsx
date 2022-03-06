import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Diwali"
        | "Christmas"
        | "Halloween"
        | "Thanksgiving"
        | "Holi";
    const [holiday, setHoliday] = useState<Holiday>("Diwali");

    function makeEmoji(): string {
        //this function renders
        if (holiday === "Holi") {
            return "🌈";
        } else if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Thanksgiving") {
            return "🦃";
        } else {
            return "🪔";
        }
    }

    function moveByNext(): void {
        const finalHoliday = nextHoliday[holiday];
        setHoliday(finalHoliday);
    }
    const nextHoliday: Record<Holiday, Holiday> = {
        Holi: "Halloween",
        Halloween: "Diwali",
        Diwali: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Holi"
    };

    function moveByAlphabet(): void {
        const finalHoliday = nextAlphaHoliday[holiday];
        setHoliday(finalHoliday);
    }
    const nextAlphaHoliday: Record<Holiday, Holiday> = {
        Thanksgiving: "Holi",
        Holi: "Halloween",
        Halloween: "Diwali",
        Diwali: "Christmas",
        Christmas: "Thanksgiving"
    };

    return (
        <div>
            <div>
                <Button onClick={moveByNext}>Advance by Year</Button>
                <Button onClick={moveByAlphabet}>Advance by Alphabet</Button>
            </div>
            <div>
                <span>Holiday: {makeEmoji()}</span>
            </div>
        </div>
    );
}
