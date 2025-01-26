import { createContext, useState } from 'react';


export const FavoritesContext = createContext({
    ids :[],
    addFavorites : (id)=>{},
    removeFavorites : (id)=>{},
});



function FavoritesProvider({children}){
   const [favoritesMeals, setFavoriteMeal] = useState([]);

   function addFavorite(id){
    setFavoriteMeal((currentFavIds) => [...currentFavIds, id]);
   };

   function removeFavorite(id){
    setFavoriteMeal((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
   };

   const value ={
    ids: favoritesMeals,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,

   }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}


export default FavoritesProvider;