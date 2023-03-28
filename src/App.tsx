import { useState } from "react";
import Alert from "./componets/Alert";
import Button from "./componets/Button";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}
export default App;
