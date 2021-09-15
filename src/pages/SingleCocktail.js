import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const urlByID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
  // parametre passed by the url -> in this case the id of the cocktal.
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktailInfo, setCocktailInfo] = useState([]);

  const fetchById = async () => {
    try {
      const response = await fetch(`${urlByID}${id}`);
      const SingleCocktail = await response.json();
      const { drinks } = SingleCocktail;
      // console.log(SingleCocktail);
      if (drinks) {
        const {
          strAlcoholic,
          strCategory,
          strDrink,
          strDrinkThumb,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
        } = drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
        ];
        const measures = [
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
        ];

        const newCocktail = {
          info: strAlcoholic,
          category: strCategory,
          name: strDrink,
          image: strDrinkThumb,
          glass: strGlass,
          instructions: strInstructions,
          ingredients: ingredients,
          measures: measures,
        };
        setCocktailInfo(newCocktail);
      } else {
        setCocktailInfo(null);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  // console.log(cocktailInfo);

  useEffect(() => {
    fetchById();
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!cocktailInfo) {
    return <h2 className="section-title">Not found</h2>;
  }

  const {
    info,
    category,
    name,
    image,
    glass,
    instructions,
    ingredients,
    measures,
  } = cocktailInfo;
  return (
    <section className="singelCocktail-section">
      <Link className="btn" to="/">
        Back to home
      </Link>
      <h2>{name}</h2>
      <div className="singleCoctail">
        <img src={image} alt={name} className="image" />
        <div className="singleCocktail-info">
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients &amp; measures:</span>
            {ingredients &&
              ingredients.map((item, index) => {
                let measure = measures.find((m, indexme) => indexme === index)
                return item ? <span key={index}> {`${measure ? measure : null}`} of {item} </span> : null;
              })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail;
