function Feedback({ type, message }) {
  if (!message) {
    return null;
  }

  return (
    <div className={`feedback ${type}`}>
      <i
        className={
          type === "success"
            ? "fa-solid fa-circle-check"
            : "fa-solid fa-circle-exclamation"
        }
      ></i>

      <span>{message}</span>
    </div>
  );
}

export default Feedback;