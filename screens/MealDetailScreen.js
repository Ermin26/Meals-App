import {View, StyleSheet, Text,ScrollView, Image, Platform, Button } from 'react-native';
import { useLayoutEffect } from 'react';
import MealDetail from '../components/MealDetail';
import IconBtn from '../components/IconBtn';
import {MEALS, CATEGORIES} from '../data/dummy-data';



function MealDetailScreen({route, navigation}){
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) =>meal.id === mealId);

    function headerButton(){
        console.log('Pressed');
    }

useLayoutEffect(()=>{
    navigation.setOptions({
        title: meal.title,
        headerRight: () =>{
                return <IconBtn icon="star" color="white" stared={headerButton}/>
              }
    },headerButton,navigation);
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