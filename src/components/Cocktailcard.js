import React from "react";
import { Link } from "react-router-dom";

function Cocktailcard({ id, info, name, image, glass }) {
  return (
    <article className="cocktailcard">
      <div className="cocktailcard-image">
        <img src={image} alt={name} />
      </div>
      <div className="cocktailcard-info">
        <h3>{name}</h3>
        <h4>{info}</h4>
        <p>{glass}</p>
        <Link className="btn" to={`/cocktail/${id}`}>
          How to create
        </Link>
      </div>
    </article>
  );
}

export default Cocktailcard;
