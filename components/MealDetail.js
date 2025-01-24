import {View, Text,  StyleSheet} from 'react-native';


function MealDetail({item}){
    return(
        <View style={styles.stepsContainer}>
            <View style={styles.stepsContainerData}>
                <View style={styles.subtitle}>
                    <Text style={styles.info}>Ingredients</Text>
                </View>
                {item.ingredients.map((ingredient) => (<View key={ingredient} style={styles.listWrapper}><Text style={styles.textData}>* {ingredient}</Text></View>))}
            </View>
            <View style={styles.stepsContainerData}>
                <View style={styles.subtitle}>
                    <Text style={styles.info}>Steps</Text>
                </View>
                {item.steps.map((step) => (<View key={step} style={[styles.listWrapper, styles.stepsWrapper]}><Text style={styles.textData} >{step}</Text></View>))}
            </View>
        </View>
    )
}

export default MealDetail;


const styles = StyleSheet.create({
    stepsContainer:{
        flex:1,
        backgroundColor:'#634d40',
        padding: 16,
        margin: 12,
        borderRadius: 8,
    },
    stepsContainerData:{
        padding: 10,
        marginVertical: 8,
    },
    subtitle:{
        borderBottomWidth: 2,
        borderColor: '#b04b0f',
        marginVertical: 12,
    },
    info:{
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#b04b0f',
    },
    listWrapper:{
        marginVertical: 4,
        padding: 8,
        backgroundColor: '#b04b0f',
        borderRadius: 26,
    },
    stepsWrapper:{
        padding: 10,
        borderRadius: 6,
        backgroundColor : 'transparent',
    },
    textData:{
        fontSize: 16,
        color: 'white',
    },
});