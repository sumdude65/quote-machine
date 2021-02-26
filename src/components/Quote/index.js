import React from "react";
import "./style.scss";

export const Quote = (props) => {
  let coloring = props.color;

  const { quote, author } = props.props;
  const tweet =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(quote + "  " + "-" + author);
  return (
    <section className="quote">
      <h3 style={{ color: coloring }}>{quote}</h3>
      <p style={{ color: coloring }}>-{author}</p>
      <div className="buttons">
        <a href={tweet} style={{ backgroundColor: coloring }}>
          Tweet this quote
        </a>
        <button
          style={{ backgroundColor: coloring }}
          onClick={() => props.handleClick()}
        >
          Next quote
        </button>
      </div>
    </section>
  );
};
