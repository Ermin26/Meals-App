import {View, StyleSheet, Text,ScrollView, Image, Platform } from 'react-native';
import { useLayoutEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MealDetail from '../components/MealDetail';
import IconBtn from '../components/IconBtn';
import {FavoritesContext} from '.././store/context/favorites-context';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import {addFavorite, removeFavorite } from '../store/redux/favorites';




function MealDetailScreen({route, navigation}){

    //const favoriteMeal = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) =>meal.id === mealId);

    //const mealIsFavorite = favoriteMeal.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatus(){
        if(mealIsFavorite){
            dispatch(removeFavorite({id: mealId}));
            //favoriteMeal.removeFavorites(mealId);
        } else{
            dispatch(addFavorite({id: mealId}));
            //favoriteMeal.addFavorites(mealId);
        }
    }

useLayoutEffect(()=>{
    navigation.setOptions({
        title: "About the meal",
        headerRight: () =>{
                return <IconBtn icon={mealIsFavorite ? 'star' : 'star-outline'} color={mealIsFavorite ? 'yellow' : 'white'} stared={changeFavoriteStatus}/>
            }
    },changeFavoriteStatus,navigation);
})

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.mealItem}>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{uri: meal.imageUrl}}/>
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.item}>{meal.duration} m</Text>
                    <Text style={styles.item}>{meal.complexity.toUpperCase()}</Text>
                    <Text style={styles.item}>{meal.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <MealDetail item={meal}/>
        </View>
    </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
    },
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        overflow: Platform.os === 'android' ? 'hidden' : 'visible',
    },
    innerContainer:{
        overflow: 'hidden',
        borderRadius: 8,
    },
    image:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        padding: 8,
    },
    item:{
        padding: 8,
    },
});