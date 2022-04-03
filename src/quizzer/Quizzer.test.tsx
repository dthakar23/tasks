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
    });
    test("Quizzes Have Questions", () => {
        expect(screen.queryAllByText("Total Questions: 5")).toHaveLength(4);
        expect(screen.queryAllByText("Total Questions: 5")).toHaveLength(4);
        expect(screen.queryAllByText("Total Questions: 3")).toHaveLength(2);
        expect(screen.queryAllByText("Total Questions: 3")).toHaveLength(2);
        expect(screen.queryAllByText("Total Questions: 4")).toHaveLength(3);
    });
});
