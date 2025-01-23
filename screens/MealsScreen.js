import {View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummy-data';

function MealsScreen({route}){
    let catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(catId) >= 0; //! Tale koda vrne 0 (true) in -1(false) shrani pa samo vrendost ki je enaka 0 ali več!
    });
    function renderMeals(itemData){
        return (
            <MealItem mealData= {itemData.item}/>
        )
    };
    return (
    <View style={styles.container}>
        <FlatList data={displayedMeals}
        keyExtractor={(item)=> item.id}
        renderItem={renderMeals} />
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


