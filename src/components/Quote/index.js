import React from "react";
import "./style.scss";

export const Quote = (props) => {
  let coloring = props.color;

  const { quote, author } = props.props;
  const tweet =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(quote + "  " + "-" + author);
  return (
    <section className="quote" id="text">
      <h3 style={{ color: coloring }}>{quote}</h3>
      <p id="author" style={{ color: coloring }}>
        -{author}
      </p>
      <div className="buttons">
        <a id="tweet-quote" href={tweet} style={{ backgroundColor: coloring }}>
          Tweet this quote
        </a>
        <button
          id="new-quote"
          style={{ backgroundColor: coloring }}
          onClick={() => props.handleClick()}
        >
          Next quote
        </button>
      </div>
    </section>
  );
};
