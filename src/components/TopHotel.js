import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import Stars from 'react-native-stars';
import { colors, sizes, spacing,shadow } from '../constants/theme'
import { Image } from 'react-native'



const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 270;

function TopHotel({item,index}) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity key={index}
            onPress={() => {
              navigation.navigate('TripDetails', {trip: item});
            }}
            style={{
              marginLeft: spacing.l,
              marginRight: index % 2 == 1 ? spacing.l : 0,
            }}>
            <View style={[styles.card, shadow.dark]}>
              {/* <FavoriteButton style={styles.favorite} /> */}
              <View
                id={`trip.${item.id}.image`}
                style={StyleSheet.absoluteFillObject}><React.Fragment>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.location}>
                 
                  <Text style={styles.textLocation}>{item.location}</Text>
                  <Icon
                    name="location-sharp" 
                    onPress={() => {}} 
                    size={14}
                    color='#859DFF'
                  />
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
              </View>
            </View>
          </TouchableOpacity>
  )
}
const styles= StyleSheet.create({
    avis: {
        fontSize: 10,
      },
      card: {
        width: CARD_WIDTH,
        minHeight : 240,
        marginVertical: 10,
        elevation : 2,
        backgroundColor : "#FFF",
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
        color  : "#000",
        fontSize : 16,
        fontWeight : '700',
        letterSpacing : 1,
        marginBottom : 2
      },
      location: {
        fontSize: 10,
        color: colors.black,
        flexDirection: 'row',
      },
      textLocation : {
        color  : "#000000CC",
        fontSize : 12,
        fontWeight : '600'
      },
      description: {
        fontSize: 12,
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
})

export default TopHotel