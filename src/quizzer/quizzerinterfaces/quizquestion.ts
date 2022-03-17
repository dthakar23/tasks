export interface QuizQuestion {
    id: number;
    name: string;
    body: string;
    points: number;
    type: string;
    options: string[];
    expected: string;
    published: boolean;
}
