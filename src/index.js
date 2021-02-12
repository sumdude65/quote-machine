import { React } from "react";
import { Tours } from "./tourData";

const Header = () => {
  return (
    <nav className="nav">
      <h1>Our tours</h1>
      <div className="ascent"></div>
    </nav>
  );
};

const TourItem = (props) => {
  const { img, title, info, price, city } = props.props;
  return (
    <article className="tour-data">
      <img src={img} alt={city} />
      <div className="content">
        <h1>{title}</h1>
        <p>{info}</p>
        <button>{price}</button>
      </div>
    </article>
  );
};

export const TourApp = () => {
  return (
    <main className="home">
      <Header />
      {Tours.map((tour) => {
        return <TourItem key={tour.id} props={tour} />;
      })}
    </main>
  );
};
