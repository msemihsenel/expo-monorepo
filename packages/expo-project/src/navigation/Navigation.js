import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../views/Home/Home';
import DetailsScreen from '../views/Details/Details';
import { NotFoundScreen } from '../views/NotFound/NotFound'
import BlankScreen from '../views/Blank/Blank'
import { NavTest } from '../views/NavTest/NavTest';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createStackNavigator();



// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="TabA" component={NavTest} />
//             <Tab.Screen name="TabB" component={NavTest} />
//         </Tab.Navigator>
//     );
// };
const linking = {
    config: {
        screens: {
            Home: "",
            Details: "details",
            Blank: "blank",
            Menu: {
                path: "menu",
                screens: {
                    TabA: "a",
                    TabB: "b",
                },
            },
            NotFound: "*",
        }
    }
};


const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Details' component={DetailsScreen} />
        <Screen name='NotFound' component={NotFoundScreen} />
        <Screen name='Blank' component={BlankScreen} />

        {/*<Screen name="Home" component={NavTest} />
        <Screen name="Feed" component={NavTest} />
        <Screen name="NotFound" component={NavTest} />
        <Screen name="Menu" component={Tabs} />*/}
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer linking={linking}>
        <style type="text/css">{`input {outline: none;}`/*TODO:expoeriment*/}</style>
        <HomeNavigator />
    </NavigationContainer>
);
