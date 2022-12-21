import MainBox from "./MainBox";
import style from "../components/style/Main.module.css";
import { useRef } from "react";

function Formsubmission(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function sumbitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const formEnteredData = {
      title: enteredTitle,
      imageUrl: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.formSubmission(formEnteredData);
  }

  return (
    <>
      <MainBox>
        <h1>submit your form here</h1>
        <form onSubmit={sumbitHandler}>
          <div className={style.formBox}>
            <label htmlFor="title">All meetup</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div>
            <label htmlFor="image">meetup Impage</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div>
            <label htmlFor="address">meetup address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div>
            <label htmlFor="Description">Description</label>
            <textarea
              id="Description"
              rows={5}
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div>
            <button>Submit form</button>
          </div>
        </form>
      </MainBox>
    </>
  );
}
export default Formsubmission;
