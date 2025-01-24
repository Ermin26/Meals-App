import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator(); //? Object with 2 properties where every property has objects with components
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#3f2f25'}
        }} >
      <Drawer.Screen name="Categories" component={CategoryScreen}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
    </Drawer.Navigator>
  )
};

export default function App() {
  return (
      <>
        <StatusBar translucent={false} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
              }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="Meals" component={MealsScreen}/>
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  
});
