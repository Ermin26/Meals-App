import { FlatList, View, StyleSheet } from "react-native";
import MealItem from './MealItem';


function MealsList({items}){
    function renderMeals(itemData){
        return (
            <MealItem mealData= {itemData.item} />
        )
    };
    return (
    <View style={styles.container}>
            <FlatList data={items}
            keyExtractor={(item)=> item.id}
            renderItem={renderMeals} />
    </View>
    )
};



export default MealsList;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:16,
    },
});