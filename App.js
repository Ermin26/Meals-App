import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';

const Stack = createNativeStackNavigator(); //? Object with 2 properties where every property has objects with components

export default function App() {
  return (
      <>
        <StatusBar translucent={false} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoryScreen}/>
            <Stack.Screen name="Meals" component={MealsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  
});
