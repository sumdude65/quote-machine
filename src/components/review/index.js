import React from "react";
import "./style.css";

export const Review = (props) => {
  const { id, img, name, title, review } = props.props;
  return (
    <article id={id} className="review">
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="content">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{review}</p>
      </div>
    </article>
  );
};
