import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
        return setIsEditing(true);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label=""
                    checked={isEditing}
                    onChange={() => setIsEditing(!isEditing)}
                />
            </div>
            <div>
                {isEditing ? (
                    <div>
                        <Form.Group controlId="formPersonName">
                            <Form.Label>
                                Name:
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                />
                            </Form.Label>
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="check-is-student"
                            label="Student?"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </div>
                ) : (
                    <span>
                        {name}
                        {isStudent ? " is a student" : " is not a student"}
                    </span>
                )}
            </div>
        </div>
    );
}
