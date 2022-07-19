import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import HotelDetailsCard from './HotelDetailsCard';

const TripDetailsCard = ({trip}) => {
  return (
    <View style={styles.card}>
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}>
        <Text style={styles.title}>{trip.title}</Text>
        <HotelDetailsCard hotel={trip} />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    // bottom: 30,
    left: 0,
    right: 0,
    // height: '30%',
  },
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.primary,
  },
  location: {
    fontSize: sizes.title,
    color: colors.primary,
  },
});

export default TripDetailsCard;
