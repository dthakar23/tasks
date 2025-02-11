import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import sketch from "./quizzer/assets/sketch.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="Quizzer-header">Quizzer</header>
            <Quizzer></Quizzer>
            <h6>Completed Features:</h6>
            <ul>
                <li>
                    Users can see a list of quizzes, including the quizzes
                    title, description, and how many questions it has
                </li>
                <li>
                    Users can select a specific quiz to see the questions,
                    including the question’s name, body, and points
                </li>
                <li>
                    Quiz questions can be of AT LEAST two types: a short answer
                    question or multiple choice question
                </li>
                <li>
                    Users can enter or choose an answer for a quiz question, and
                    be told if they are correct
                </li>
                <li>Users can delete an existing quiz</li>
                <li>Users can clear out their existing answers for a quiz</li>
                <li>
                    Users can filter the questions in a list so that only
                    published questions are shown
                </li>
            </ul>
            <img src={sketch} alt="My Quizzer Sketch"></img>
            <hr></hr>
            <header className="App-header">
                Disha Thakar: UD CISC275 with React Hooks and TypeScript
            </header>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
