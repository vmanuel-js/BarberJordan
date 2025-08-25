function CartWidget() {
  return (
    <div
      style={{
        backgroundColor: "#3b3b3b",
        fontSize: "1.2rem",
        cursor: "pointer",
        margin: "30px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      🛒
      <span
        style={{
          backgroundColor: "#1f1f1fff",
          color: "#fff",
          fontSize: "1.1rem",
          fontWeight: "bold",
          padding: "0px 10px",
          borderRadius: "10px",
        }}
      >
        0
      </span>
    </div>
  );
}

export default CartWidget;
