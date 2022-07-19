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
// import Icon from '../components/Icon';
// import { Rating } from "@rneui/themed";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Ionicons';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 270;

const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TripsList = ({list}) => {
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
              {/* <FavoriteButton style={styles.favorite} /> */}
              <SharedElement
                id={`trip.${item.id}.image`}
                style={StyleSheet.absoluteFillObject}><React.Fragment>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.location}>
                  <Icon
                    name="location-sharp" 
                    onPress={() => {}} 
                    size={20}
                    color='#4169e1'
                  />
                  <Text>{item.location}</Text>
                </View>
                <View style={styles.body}>
                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                  
                </View>
                <View style={styles.starContainer}>
                  <Stars
                      default={2.5}
                      update={(val)=>{this.setState({stars: val})}}
                      count={5}
                      half={true}
                      starSize={60}
                      fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                      emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                      halfStar={<Icon name={'star-half-sharp'} style={[styles.myStarStyle]}/>}
                      disabled={true}
                      style={styles.stars}
                  />
                  <Text style={styles.avis}>
                    200 Avis
                  </Text>
                </View>
              </View></React.Fragment>
              </SharedElement>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  avis: {
    fontSize: 10,
  },
  starContainer : {
    display : 'flex',
    alignItems : "flex-start",
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 5,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT, 
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  favorite: {
    position: 'absolute',
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 120,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 120,
    left: 5,
    right: 5,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.black,
  },
  location: {
    fontSize: sizes.h5,
    color: colors.black,
    flexDirection: 'row',
  },
  description: {
    fontSize: sizes.h5,
    color: '#4169e1',
    flexDirection: 'column',
  },
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 2,
    left: 0,
    textAlign: 'center',
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
// 0664571928akrammezaache
export default TripsList;
