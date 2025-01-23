import {View, Text, Image, StyleSheet, Pressable, Platform} from 'react-native';
import { useNavigation} from '@react-navigation/native'




function showMeal({mealData}){
    const navigation = useNavigation();

    function selectMealItem(){
        navigation.navigate('MealDetails', {
            mealId: mealData.id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#cccc'}} style={({pressed}) => [ Platform.OS === 'android' ? null : pressed && styles.btnPressed ]} onPress={selectMealItem}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: mealData.imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{mealData.title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.item}>{mealData.duration} m</Text>
                        <Text style={styles.item}>{mealData.complexity.toUpperCase()}</Text>
                        <Text style={styles.item}>{mealData.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}



export default showMeal;


const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
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
    btnPressed:{
        opacity: Platform.os === 'android' ? 1 : 0.5,
    }
})