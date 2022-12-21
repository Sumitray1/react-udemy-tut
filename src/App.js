import Todo from "./components/Todo";
import Looppratice from "./components/Looppratice";
import Formsubmission from "./components/Formsubmission";

function App() {
  return (
    <>
      <Todo Heading="hellow fucker" />
      <Todo Heading="delete" />
      <Todo Heading="cancel" />
      <Looppratice />
      <Formsubmission />
    </>
  );
}

export default App;
