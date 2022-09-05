import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import TopHotel from '../components/TopHotel';

const AllTopHotels = ({navigation, route}) => {

    const [slides , setSlides] =  useState(route.params.slides)
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
        <View style={styles.starContainer}>
            {slides.map((slide,index) => {
                return(
                    <TopHotel item={slide} index={index}  />
                )
            })}
        </View>
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
  starContainer : {
    marginBottom : 20,
    display : 'flex',
    flex : 2,
    alignItems : "flex-start",
    flexWrap :"wrap",
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 5,
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

export default AllTopHotels