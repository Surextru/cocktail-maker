import React, { useState, useEffect, useContext } from "react";

const urlSearchByName =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchByName = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${urlSearchByName}${search}`);
      const drinksData = await response.json();
      const { drinks } = drinksData;


      if (drinksData) {
        const newContails = drinks.map((drink) => {
          //for each drink destructure in main attributes:
          const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
            drink;
          // and return with renamed attributes (only pick the needed ones)
          return {
            id: idDrink,
            info: strAlcoholic,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });
        setCocktails(newContails);
      } 
      
      else {
        setCocktails([]);
      }
      setLoading(false);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  //
  useEffect(() => {
    fetchByName();
  }, [search]);

  return (
    <CocktailContext.Provider value={{ cocktails, setSearch, loading }}>
      {children}
    </CocktailContext.Provider>
  );
};

// export useGlobalContext and return the useContext
// with the created context
export const useGlobalContext = () => {
  return useContext(CocktailContext);
};

// export the created context and provider
export { CocktailContext, ContextProvider };
