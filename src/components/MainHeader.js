import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {colors, sizes, spacing} from '../constants/theme';
import { Input } from '@rneui/themed';

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      {/* <Icon icon="Hamburger" onPress={() => {}} /> */}
      {/* <Text style={styles.title}>{title}</Text> */}
      {/* <Icon icon="Search" onPress={() => {}} /> */}

      <Input
      placeholder='Your distination'
      style={styles.searchInput}
      leftIcon={
        <Icon
          icon="Search" 
          onPress={() => {}} 
          size={24}
          color='black'
        />
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  searchInput: {
    borderRadius: 10,
    borderColor: colors.black,
  }
  // title: {
  //   fontSize: sizes.h3,
  //   fontWeight: 'bold',
  // },
});

export default MainHeader;
