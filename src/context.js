import React, {useState, useEffect, useContext} from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

const CocktailContext = React.createContext();

const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("a");
    const [cocktails, setCocktails] = useState([]);

    const fetchByName = async () => {
        try {
            const response = fetch(`${url}${search}`);
            const drinksData = await response.json();
            console.log(drinksData);

        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    // 
    useEffect(()=>{
        fetchByName();
    }, [search])

    return <CocktailContext.Provider value={loading}></CocktailContext.Provider>
}

// export useGlobalContext and return the useContext
// with the created context
export const useGlobalContext = () =>{
    return useContext(CocktailContext);
}

// export the created context and provider
export {CocktailContext, ContextProvider};

