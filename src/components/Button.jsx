export function Button(props) {
  /* 
  props = {
    text: "algun string"
  }
  */
  console.log({ props });
  const bgColor = props.tipo === "danger" ? "red" : "tomato";

  return (
    <button
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "0.25rem",
        backgroundColor: bgColor,
        padding: "0.25rem",
        color: "white",
        marginRight: "8px",
      }}
      onClick={props.cuandoClickeo}
    >
      {props.text}
    </button>
  );
}
