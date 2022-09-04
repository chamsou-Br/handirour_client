import React, { useState } from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeNavigator from './HomeNavigator';
import AuthNavigation from './AuthNavigation';

const Stack = createSharedElementStackNavigator();


const MainNavigator = () => {
  const [isAuth , setAuth] = useState(false)
  if(isAuth) {
    return <HomeNavigator isAuth={isAuth} setAuth={setAuth}/>
  }else {
    return <AuthNavigation isAuth={isAuth} setAuth={setAuth} />
  }
};

export default MainNavigator;
