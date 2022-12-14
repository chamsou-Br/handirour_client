import React, { useEffect } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TripDetailsCard from '../components/TripDetailsCard';
import * as Animatable from 'react-native-animatable';
import TripDetailsCarousel from '../components/TripDetailsCarousel';

const TripDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  useEffect(()=> {
    console.log('kkkkkkkkkkkkkkkkkkkkkkk')
  },[])
  const {trip} = route.params;
  const slides = [trip.image, ...trip.gallery];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon
          // icon={name}
          name='arrow-back-circle-outline'
          size={25}
          style={{
            color: colors.light,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon
            // icon={name}
            name='notifications'
            size={25}
            style={{
              color: colors.light,
            }}
        />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <React.Fragment>
          {/* <Text style={{top: 5, textAlign:'left', fontSize: sizes.h3, left: 20, fontSize: sizes.h3, fontWeight: 'bold', color: colors.black,}}>{trip.title}</Text> */}
          <TripDetailsCarousel slides={slides} id={trip.id} />
          <TripDetailsCard trip={trip} />
        </React.Fragment>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#859DFF',
  },
  scroll: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
  },
  imageBox: {
    borderRadius: sizes.radius,
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    top: 20,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    width: '90%',
  },
});

export default TripDetailsScreen;
