import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
// import { View,Text } from 'react-native'; 
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import {PLACES, TOP_PLACES, CATEGORY, accibilities} from '../data';
import { FlatList } from 'react-native-gesture-handler';

const PointFortsCard = ({hotel, acc, acci}) => {
    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {acci.map(s => {
                // console.log('4', s, accibilities, accibilities.filter(it => it.nom === s), 4);
                const item = acc.filter(it => it.nom == s)[0]
                return ( 
                 <View style={{justifyContent: 'space-around', alignItems: 'center',marginBottom : 15}}>
                    {item ? (
                        <View style={{width : 60,display : 'flex',justifyContent : 'center',borderRadius: 150, height : 60,backgroundColor: '#859DFF',marginHorizontal : 10,padding : 8}}>
                              <Icon
                            name={item.icon}
                            size={25}
                            style={{
                                color: 'white',
                                textAlign : 'center'

                            }}
                         />
                        </View>
                       
                         ) :
                    null}
                    <Text style={{fontSize : 12,marginVertical : 2,fontWeight  : "500"}}>{item.nom}</Text>
                </View>
                )
            })}
        </View>
    )
};

export default PointFortsCard;