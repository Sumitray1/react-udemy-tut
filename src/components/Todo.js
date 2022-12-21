import { useState } from "react";
import DialogBox from "./DialogBox";
function Todo(props) {
  const [closeWindow, setCloseWindow] = useState(false);
  function dBox() {
    console.log(props.Heading);
    setCloseWindow(true);
  }
  function closeBox() {
    setCloseWindow(false);
  }

  return (
    <>
      <div className="dialog">
        <h1>
          <center>{props.Heading}</center>
        </h1>
        <div>
          <button onClick={dBox}> delete</button>
        </div>
      </div>
      {closeWindow ? <DialogBox cancel={closeBox} conform={closeBox} /> : null}
    </>
  );
}
export default Todo;
