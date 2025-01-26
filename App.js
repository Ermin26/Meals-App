import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';
import FavoritesProvider from './store/context/favorites-context';
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
          sceneStyle: {backgroundColor: '#3f2f25'},
          drawerContentStyle: {backgroundColor: '#351401'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
          }} >
      <Drawer.Screen name="Categories" component={CategoryScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons color ={color} size={size} name="list" />
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons color ={color} size={size} name="star" />
      }} />
    </Drawer.Navigator>
  )
};

export default function App() {
  return (
      <>
        <StatusBar translucent={false} />
        {/*<FavoritesProvider>*/}
        <Provider store={store}>
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
        </Provider>
        {/*</FavoritesProvider>*/}
      </>
  );
}

const styles = StyleSheet.create({
  
});
