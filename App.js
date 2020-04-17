import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Calculation } from "./app/views/Screens";

const HomeStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Calculation" component={Calculation} />
        </HomeStack.Navigator>
    </NavigationContainer>
)
