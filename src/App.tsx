import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Disha Thakar: UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Summer 2022 Travels</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="red-box">
                            US States to Visit Next:
                            <ol>
                                <li>Washington</li>
                                <li>Wyoming</li>
                                <li>Lousiana</li>
                            </ol>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                            <p>
                                Edit <code>src/App.tsx</code> and save. This
                                page will automatically reload. Hello World!
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="red-box">
                            <div className="img">
                                <img
                                    src="https://smalltownwashington.com/wp-content/uploads/2021/03/shutterstock_681712171-scaled.jpg"
                                    alt="Washington state"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
