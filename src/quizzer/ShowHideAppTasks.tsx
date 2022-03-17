import { useState } from "react";
import { Button } from "react-bootstrap";

export function ShowHideTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && (
                <div>// Existing component instantiations go here ...</div>
            )}
            <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
        </div>
    );
}
