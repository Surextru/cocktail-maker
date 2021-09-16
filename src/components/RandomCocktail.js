import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const urlRandomCocktail =
  "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function RandomCocktail() {
  const [randomId, setRandomId] = useState(null);

  const fetchRandomCocktail = () =>
    fetch(urlRandomCocktail)
      .then((response) => response.json())
      .then((data) => {
        const { drinks } = data;
        setRandomId(drinks[0].idDrink);
      })
      .catch((error) => console.error(error));

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  return (
    <div className="randomcocktail">
      <Link className="btn" to={`/cocktail/${randomId}`}>try random cocktail</Link>
    </div>
  );
}

export default RandomCocktail;
