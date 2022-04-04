import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import myQuizzes from "./quizData.json";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("Quizzes Are Visible", () => {
        expect(screen.getByText(myQuizzes[0].title)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[1].title)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[2].title)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[3].title)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[4].title)).toBeInTheDocument();

        expect(screen.getByText(myQuizzes[0].description)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[1].description)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[2].description)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[3].description)).toBeInTheDocument();
        expect(screen.getByText(myQuizzes[4].description)).toBeInTheDocument();

        expect(screen.queryAllByText("Total Questions: 5")).toHaveLength(4);
        expect(screen.queryAllByText("Total Questions: 5")).toHaveLength(4);
        expect(screen.queryAllByText("Total Questions: 3")).toHaveLength(2);
        expect(screen.queryAllByText("Total Questions: 3")).toHaveLength(2);
        expect(screen.queryAllByText("Total Questions: 4")).toHaveLength(3);
    });
    describe("Quizzes Have Questions", () => {
        beforeEach(() => {
            render(<Quizzer />);
        });
        test("Quiz 1", () => {
            expect(
                screen.getByText(myQuizzes[0].questions[0].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[1].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[2].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[3].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[4].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[0].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[1].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[2].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[3].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[4].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[0].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[1].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[2].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[3].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[0].questions[4].points)
            ).toBeInTheDocument();
        });
        test("Quiz 2", () => {
            expect(
                screen.getByText(myQuizzes[1].questions[0].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[1].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[2].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[3].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[4].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[0].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[1].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[2].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[3].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[4].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[0].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[1].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[2].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[3].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[1].questions[4].points)
            ).toBeInTheDocument();
        });
        test("Quiz 3", () => {
            expect(
                screen.getByText(myQuizzes[2].questions[0].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[1].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[2].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[0].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[1].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[2].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[0].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[1].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[2].questions[2].points)
            ).toBeInTheDocument();
        });
        test("Quiz 4", () => {
            expect(
                screen.getByText(myQuizzes[3].questions[0].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[1].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[2].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[0].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[1].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[2].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[0].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[1].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[3].questions[2].points)
            ).toBeInTheDocument();
        });
        test("Quiz 5", () => {
            expect(
                screen.getByText(myQuizzes[4].questions[0].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[1].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[2].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[3].name)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[0].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[1].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[2].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[3].body)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[0].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[1].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[2].points)
            ).toBeInTheDocument();
            expect(
                screen.getByText(myQuizzes[4].questions[3].points)
            ).toBeInTheDocument();
        });
    });

    test("Short Answer and Multiple Choice", () => {
        expect(screen.queryAllByText(""));
    });
});
