import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style , zIndex:1,right: '22px '}}
        onClick={props.onClick}
      />
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style ,zIndex:1,left: '20px'}}
        onClick={props.onClick}
      />
    </>
  );
}