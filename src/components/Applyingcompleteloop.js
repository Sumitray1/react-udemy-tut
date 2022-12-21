import style from "../components/style/Main.module.css";

function Applyingcompleteloop(props) {
  return (
    <>
      <h1>Sample data list</h1>
      <div className="Body-content">
        <h3>{props.title}</h3>
        <img src={props.image} alt={props.title} className={style.img} />
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default Applyingcompleteloop;
