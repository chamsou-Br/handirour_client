import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
// import { View,Text } from 'react-native'; 
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Ionicons';


const HotelDetailsCard = ({hotel}) => {
    const detail = 'Busness Urban hotel located at the center of Algiers'
    return (
        <View>
        <Collapse style={{borderWidth:1, borderRadius: 20, backgroundColor:'#E6E6E6'}}>
            <CollapseHeader style={{flexDirection:'column',alignItems:'flex-start',padding:9, borderRadius: 20,}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', alignItems:'center',}}>
                    <Text style={{fontSize: sizes.h3}}>https://www.hotel.com</Text>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                        <Stars
                            default={2.5}
                            update={(val)=>{this.setState({stars: val})}}
                            count={5}
                            half={true}
                            starSize={50}
                            fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                            halfStar={<Icon name={'star-half-sharp'} style={[styles.myStarStyle]}/>}
                            disabled={true}
                            style={styles.stars}
                        />
                        <Text style={{fontSize: sizes.h4}}>200 Avis</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'flex-start'}}>
                  <Icon
                    name="location-sharp" 
                    onPress={() => {}} 
                    size={20}
                    color='#4169e1'
                  />
                  <Text>{hotel.location}</Text>
                </View>
                <View>
                    <Text>{hotel.description}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text>Details :</Text>
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text>{detail.slice(0, 50)}</Text>
                    <Icon
                        name="close" 
                        onPress={() => {}} 
                        size={20}
                        color='#4169e1'
                    />
                </View>
                
            </CollapseHeader>
            <CollapseBody style={{justifyContent:'center',backgroundColor:'#E6E6E6', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                <Collapse style={{flexDirection:'row'}}>
                    <CollapseHeader style={{width: '100%', top: -15, paddingLeft: 10}}>
                        <Text>{detail.slice(50, detail.length)}</Text>
                    </CollapseHeader>
                    <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                        <Text>+1 310 346 0018</Text>
                    </CollapseBody>
                </Collapse>
                {/* <Collapse style={{flexDirection:'row'}}>
                    <CollapseHeader>
                        <Text>Name : Mohammed Ali Kley</Text>
                    </CollapseHeader>
                    <CollapseBody style={{alignItems:'center',justifyContent:'center',padding:10}}>
                        <Text>sample@sample.ma</Text>
                    </CollapseBody>
                </Collapse> */}
            </CollapseBody>
        </Collapse>
      </View>
    );
  };

  const styles = StyleSheet.create({
    avis: {
      fontSize: 10,
    },
  });  
export default HotelDetailsCard;