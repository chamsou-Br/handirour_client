import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import FavoriteButton from './FavoriteButton';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({list}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TripDetails', {trip: item});
            }}
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}>
            <View style={[styles.card, shadow.dark]}>
              <SharedElement
                id={`trip.${item.id}.image`}
                style={StyleSheet.absoluteFillObject}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </SharedElement>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {

    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
    borderRadius: sizes.radius,
  },
  favorite: {
    position: 'absolute',
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
  imageBox: {
    width: CARD_WIDTH - 20,
    height: CARD_HEIGHT - 20,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH - 20,
    height: CARD_HEIGHT - 20,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80, 
    left: 16,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    fontSize: sizes.h4,
    color: colors.white,
  },
});

export default TopPlacesCarousel;
