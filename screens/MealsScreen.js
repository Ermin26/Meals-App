import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import {MEALS, CATEGORIES} from '../data/dummy-data';

function MealsScreen({route, navigation,goTo}){
    let catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(catId) >= 0; //! Tale koda vrne 0 (true) in -1(false) shrani pa samo vrendost ki je enaka 0 ali več!
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    },[catId, navigation]);


    function renderMeals(itemData){
        
        return (
            <MealItem mealData= {itemData.item} />
        )
    };
    return (
    <View style={styles.container}>
        <Pressable android_ripple={{color:'#cccc'}}>
            <FlatList data={displayedMeals}
            keyExtractor={(item)=> item.id}
            renderItem={renderMeals} />
        </Pressable>
    </View>
    )
};

export default MealsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


