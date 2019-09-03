import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/Home';
import Practice from '../screens/Practice';

const AppNavigator = createStackNavigator({
    // Splash: SplashScreen,
    Home: HomeScreen,
    Practice: Practice
},
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
);
export default createAppContainer(AppNavigator);