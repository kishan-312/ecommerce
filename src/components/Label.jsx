function Label({ labelText, htmlfor }) {
  return (
    <>
      <label htmlFor={htmlfor}>{labelText}</label>
    </>
  );
}

export default Label;
