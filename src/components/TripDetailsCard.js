import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HotelDetailsCard from './HotelDetailsCard';
import PointFortsCard from './PointFortsCard';
import {PLACES, TOP_PLACES, CATEGORY, accibilities, points} from '../data';

const TripDetailsCard = ({trip}) => {
  return (
    <View style={styles.card}>
      <Animatable.View
        style={{padding: 15}}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}>
        {/* <Text style={styles.title}>{trip.title}</Text> */}
        <HotelDetailsCard hotel={trip} />
        <Text style={styles.title}>POINTS FORTS</Text>
        <PointFortsCard hotel={trip} acc={points} acci={trip.points} />
        <Text style={styles.title}>ACCIBILITIES</Text>
        <PointFortsCard hotel={trip} acc={accibilities} acci={trip.accibilities} />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    // padding: 5,
  },
  title: {
    padding: 10,
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default TripDetailsCard;
