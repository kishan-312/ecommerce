function Input({ type, classname, placeholder, name, id, ref, onchange }) {
  return (
    <>
      <input
        type={type}
        className={classname}
        placeholder={placeholder}
        name={name}
        id={id}
        ref={ref}
        onChange={onchange}
      />
    </>
  );
}

export default Input;
