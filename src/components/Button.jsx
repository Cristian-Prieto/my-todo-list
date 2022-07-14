export function Button({ tipo, text, cuandoClickeo }) {
  /* 
  props = {
    text: "algun string"
  }
  */
  const bgColor = tipo === "danger" ? "red" : "tomato";

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
      onClick={cuandoClickeo}
    >
      {text}
    </button>
  );
}
