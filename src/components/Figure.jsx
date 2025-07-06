import React from "react";

function Figure({ classname, style, imgSrc, imgAlt, imgStyle }) {
  return (
    <>
      <figure className={classname} style={style}>
        <img src={imgSrc} alt={imgAlt} style={imgStyle} />
      </figure>
    </>
  );
}

export default Figure;
