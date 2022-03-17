import { QuizQuestion } from "./quizquestion";

export interface Quiz {
    title: string;
    description: string;
    questionTotal: number;
    questions: QuizQuestion[];
}
