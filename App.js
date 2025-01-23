import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator(); //? Object with 2 properties where every property has objects with components

export default function App() {
  return (
      <>
        <StatusBar translucent={false} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
              }}>
            <Stack.Screen name="Categories" component={CategoryScreen} options={{
              title: 'Meals categories',
              //headerStyle: {backgroundColor: '#351401'},
              //headerTintColor: 'white',
              //contentStyle: {backgroundColor: '#3f2f25'}
            }}/>
            <Stack.Screen name="Meals" component={MealsScreen}
              // options={({route, navigation})=>{
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,

              //   };
              // }}
            />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  
});
