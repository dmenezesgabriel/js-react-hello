import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

function App() {
  const [requestState, setRequestState] = useState<RequestState>({
    status: "idle",
  });
  const [enabled, setEnabled] = useState<boolean>(true);

  return (
    <>
      <div>{requestState.status}</div>
      <Button title="Click me" onBtnClick={() => setEnabled(!enabled)} />
      <Button disabled={!enabled} title="Do not click me" />
    </>
  );
}

export default App;
