import React, { useState }  from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors, sizes , spacing , shadow} from '../constants/theme';
import {PLACES, TOP_PLACES, CATEGORY} from '../data';
import { SearchBar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import TopHotel from '../components/TopHotel';


const AllHOtels = ({route}) => {
  const [search, setSearch] = useState("");
  const [slides , setSlides] =  useState([...PLACES,...TOP_PLACES])
  
  const updateSearch = () => {
    setSlides([
      ...PLACES.filter(place => place.location.includes(search)),
      ...TOP_PLACES.filter(place => place.location.includes(search))
    ])
  };


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.iconContainer}>
        <Icon
            // icon={name}
            name='log-out-outline'
            onPress={()=>route.params.setAuth(false)}
            size={22}
            style={{
              color: colors.light,
              marginLeft : 20
            }}
        />
        <Icon
          // icon={name}
          name='notifications-outline'
          size={22}
          style={{
            color: colors.light,
            marginLeft : 20
          }}
        /> 
        </View>
       
        <SearchBar
          platform="android"
          containerStyle={{right: 10, borderRadius: 50, alignSelf: 'center', width: sizes.width - 140, height: 50, justifyContent: 'center'}}
          inputContainerStyle={{}}  
          inputStyle={{fontSize : 16 }}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          cancelIcon={()=> <></>}
          loadingProps={{}}
          onEndEditing={()=> {updateSearch()} }
          onClear={()=>{setSearch("");setSlides([...PLACES,...TOP_PLACES])}}
          onChangeText={newVal => {setSearch(newVal);console.log(newVal)}}
          placeholder="Your distination..."
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          value={search}
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
  head: {
    flexDirection: 'row-reverse',
    display : 'flex',
    justifyContent: "space-between",
    paddingHorizontal : 15,
    alignItems : 'center',
    height : 70,
  },
  iconContainer : {
    display : "flex",
    flexDirection :'row',
    height : 50,
    alignItems : 'center',
    justifyContent : "center"
  },
  scroll: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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

});



export default AllHOtels;
