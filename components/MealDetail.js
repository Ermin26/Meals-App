import {View, Text, Image, StyleSheet, Pressable, FlatList} from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data';



function MealDetail({item}){
    return(
        <View style={styles.stepsContainer}>
            <View style={styles.ingredients}>
                <Text style={styles.info}>Ingredients</Text>
                {item.ingredients.map((ingredient) => (<Text style={styles.textData}>* {ingredient}</Text>))}
            </View>
            <View style={styles.steps}>
                <Text style={styles.info}>Steps</Text>
                {item.steps.map((ingredient) => (<Text style={styles.textData}>{ingredient}</Text>))}
            </View>
        </View>
    )
}

export default MealDetail;


const styles = StyleSheet.create({
    stepsContainer:{
        flex:1,
        backgroundColor:'white',
        padding: 16,
        margin: 12,
        borderRadius: 8,
    },
    info:{
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    ingredients:{
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#fff2',
    },
    steps:{
        marginVertical: 8,
        padding: 8,
    },
    textData:{
        padding:4,
        fontSize: 16,
    }
});