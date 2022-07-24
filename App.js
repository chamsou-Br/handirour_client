import { NativeBaseConfigProvider, NativeBaseProvider } from 'native-base';
import React from 'react';
import MainNavigator from './src/navigations/MainNavigator';
import LoginScreeen from './src/screens/LoginScreeen';
import RegisterScreen from './src/screens/RegisterScreen';

const App = () => {
  return(
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  ) 

};

export default App;
