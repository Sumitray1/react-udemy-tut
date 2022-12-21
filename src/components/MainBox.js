import style from "../components/style/Main.module.css";
function MainBox(props) {
  return (
    <>
      <div className={style.main}> {props.children}</div>
    </>
  );
}
export default MainBox;
