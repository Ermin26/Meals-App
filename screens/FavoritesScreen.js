import {View, Text, StyleSheet} from 'react-native';
import MealList from '.././components/MealsList/MealList';
import {MEALS} from '../data/dummy-data';
import {  useContext} from 'react';
import { useSelector } from 'react-redux';
import { FavoritesContext } from '../store/context/favorites-context';


function FavoriteScreen(){
    //const favoritesMealsCtx = useContext(FavoritesContext);
    //const favoritesMeals = MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id))
    const favoritesMealIds = useSelector(state => state.favoritesMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoritesMealIds.includes(meal.id))
    
    if(favoriteMeals.length === 0){
        return (
            <View style={styles.container}>
                <Text style={styles.textInfo}>You have no favorites meals yet.</Text>
            </View>
        )
    }
    return <MealList items={favoriteMeals} />
};



export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInfo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'orange',
    }
})