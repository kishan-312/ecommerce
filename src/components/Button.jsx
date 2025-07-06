function Button({ btnText, type, classname, style, onclick, disabled, key }) {
  return (
    <>
      <button
        className={classname}
        type={type}
        disabled={disabled}
        style={style}
        onClick={onclick}
        key={key}
      >
        {btnText}
      </button>
    </>
  );
}

export default Button;
