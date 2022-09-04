import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../screens/HomeScreen';
import LoginScreeen from '../screens/LoginScreeen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createSharedElementStackNavigator();

const AuthNavigation = ({isAuth,setAuth}) => {
    


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      initialParams={{isAuth ,setAuth}}
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
      initialParams={{isAuth ,setAuth}}
        name="LoginScreen"
        component={LoginScreeen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
