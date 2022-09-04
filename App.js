import { NativeBaseConfigProvider, NativeBaseProvider } from 'native-base';
import React from 'react';
import HomeNavigator from './src/navigations/HomeNavigator';
import MainNavigator from './src/navigations/MainNavigator';



const App = () => {
  return(
    <NativeBaseProvider>
      <MainNavigator />
    </NativeBaseProvider>
  ) 

};

export default App;
