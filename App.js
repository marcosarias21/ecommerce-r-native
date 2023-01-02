// eslint-disable-next-line import/no-extraneous-dependencies
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/app/store';
import { Cart } from './src/screens/Cart';
import { Home } from './src/screens/Home';

const Tab = createBottomTabNavigator();

const StackComponent = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name='Shopping' component={Home} />
      </Stack.Navigator>

  );
};

export const App = () => {
  const { products } = useSelector((state => state));
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Shopping'
          component={StackComponent}
          options={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#C83C45',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#C83C45',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26}/>
            ),
            tabBarBadge: products.length || null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
