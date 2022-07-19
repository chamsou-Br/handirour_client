import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReservationScreen from '../screens/ReservationScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import Icon from '../components/Icon';
import {colors, sizes} from '../constants/theme';
import {StyleSheet, Animated} from 'react-native';
import HomeNavigator from './HomeNavigator';
// import { Icon, Rating } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';

const tabs = [
  {
    name: 'home',
    screen: HomeNavigator,
  },
  {
    name: 'bookmark-outline',
    screen: ReservationScreen,
  },
  {
    name: 'person',
    screen: ProfileScreen,
  },
  {
    name: 'settings-outline',
    screen: SettingsScreen,
  }, 
];

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      // icon={name}
                      name={name}
                      size={22}
                      style={{
                        color: focused ? '#4169e1' : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 12,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 8,
    backgroundColor: '#4169e1',
    zIndex: 100,
  },
});

export default TabNavigator;
