import React from "react";
import Cocktail from "./Cocktailcard";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  if(cocktails.length < 1){
      return <h2 className="title-section">Match not found</h2>
  }

  return (
    <div className="main-section">
      <h2 className="title-section">Cocktail List</h2>
      <div className="cocktail-list-section">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail}></Cocktail>;
        })}
      </div>
    </div>
  );
}

export default CocktailList;
