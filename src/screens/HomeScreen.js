import React, { useEffect, useState }  from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES, CATEGORY} from '../data';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';
// import { SearchBar } from 'react-native-screens';
import { SearchBar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/Category';


const HomeScreen = ({route}) => {
  const [search, setSearch] = useState("");
  
  const updateSearch = (search) => {
    setSearch(search);
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
          containerStyle={{right: 10, borderRadius: 50, alignSelf: 'center', top: 10, width: sizes.width - 140, height: 50, justifyContent: 'center'}}
          inputContainerStyle={{}}  
          inputStyle={{fontSize : 16 }}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Your distination..."
          placeholderTextColor="#888"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          // showLoading
          onCancel={() => setSearch('')}
          value={search}
          onChange={updateSearch}
        />
      </View>
      

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <React.Fragment>
          <TopPlacesCarousel list={TOP_PLACES} />
          <Categories list={CATEGORY} />
          <SectionHeader
            style={styles.seeAll}
            title="Top hotels accirding reduction"
            buttonTitle="See All"
            onPress={() => {}}
          />
          <TripsList list={PLACES} />

          <SectionHeader
            style={styles.seeAll}
            title="Top hotels accirding rating"
            buttonTitle="See All"
            onPress={() => {}}
          />
          <TripsList list={TOP_PLACES} />
          <View style={{height : 50}}></View>
        </React.Fragment>
      </ScrollView>
    </View>
  ); 
};


const styles = StyleSheet.create({
  scroll: {
    paddingTop : 10,
    backgroundColor: colors.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#859DFF',
  },
  head: {
    flexDirection: 'row-reverse',
    display : 'flex',
    justifyContent: "space-between",
    paddingHorizontal : 15,
    alignItems : 'center'
  },
  iconContainer : {
    display : "flex",
    flexDirection :'row',
    height : 50,
    alignItems : 'center',
    top : 10,
    justifyContent : "center"
  }
});

export default HomeScreen;
