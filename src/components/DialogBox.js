function DialogBox(props) {
  //   function conform() {
  //     console.log("deleted");
  //     props.conform();
  //   }
  //   function cancel() {
  //     console.log("canceled");
  //     props.cancel();
  //   }
  return (
    <>
      <div className="dialog-box">
        <h1>Are you sure </h1>
        <button onClick={props.cancel}>cancel</button>
        <button onClick={props.conform}>Conform</button>
      </div>
    </>
  );
}
export default DialogBox;
