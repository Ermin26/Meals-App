import MealList from '.././components/MealsList/MealList';
import { useLayoutEffect } from 'react';

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

    return(
        <MealList items={displayedMeals}/>
    )

};

export default MealsScreen;




