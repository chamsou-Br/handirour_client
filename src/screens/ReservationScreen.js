import React, { useState }  from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
import ReservationCard from '../components/ReservationCard';
const { width, height } = Dimensions.get('screen');
// import faker from 'faker'
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import { reservation } from '../data';
import { SearchBar } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { PanResponder } from 'react-native';

const SPACING = 20;
const AVATAR_SIZE = 70;

const ReservationScreen = ({route}) => {

  const navigation = useNavigation()
  const pan  = PanResponder.create({
    onStartShouldSetPanResponder : (e,gestureState) => {
        return true
    },
    onPanResponderEnd : (e , gestureState )=> {
        if(gestureState.dx < 0) {
           navigation.navigate("person")
        }
        if(gestureState.dx > 0) {
          navigation.navigate("bed-outline")
        }
        return true
    }
})

  return (
    <Animated.View {...pan.panHandlers} style={{flex: 1, backgroundColor: '#859DFF'}}>
      <View style={styles.head}>
        <Icon
            // icon={name}
            name='log-out-outline'
            onPress={()=>route.params.setAuth(false)}
            size={22}
            style={{
              color: colors.light,
              alignSelf: 'center',
            }}
        />
        <Icon
          // icon={name}
          name='notifications-outline'
          size={22}
          style={{
            color: colors.light,
            alignSelf: 'center'
          }}
        />
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <React.Fragment>
          {reservation.map(res => {
            return(<>
              <ReservationCard key={res} reservation={res} />
            </>)
          })}
        </React.Fragment>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    width: '85%',
    height: 50,
    justifyContent: 'space-between',
  },
  scroll: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
})

export default ReservationScreen;
