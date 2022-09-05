import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'native-base';
import React, { useEffect } from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import AllTopHotels from '../screens/AllTopHotels';
import HomeScreen from '../screens/HomeScreen';
import LoginScreeen from '../screens/LoginScreeen';
import RegisterScreen from '../screens/RegisterScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import TabNavigator from './TabNavigator';

const Stack = createSharedElementStackNavigator();

const HomeNavigator = ({isAuth,setAuth}) => {
  return (
    <NavigationContainer >
    <StatusBar hidden />
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        initialParams={{isAuth ,setAuth}}
        component={TabNavigator}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetailsScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress,
              backgroundColor: 'transparent'
            },
          }),
        }}
      />
      <Stack.Screen
        name="AllTopHotels"
        component={AllTopHotels}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress,
              backgroundColor: 'transparent'
            },
          }),
        }}
      />
      </Stack.Navigator>
  </NavigationContainer>
  )
};

export default HomeNavigator;
