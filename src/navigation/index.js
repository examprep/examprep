import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/Home';
import Practice from '../screens/Practice';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Practice: Practice
},
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
);
export default createAppContainer(AppNavigator);