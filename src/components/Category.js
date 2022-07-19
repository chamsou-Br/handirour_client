import React, {Component} from 'react';

import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

// const CARD_WIDTH = sizes.width - 80;

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
// const CARD_HEIGHT = 220;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;


const Categories = ({list}) => {
    const navigation = useNavigation();
    state = {};
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
            key={index}
            onPress={() => 
            navigation.navigate('TripDetails', {
                item,
            })
            }
            >
            <View>
                <Text
                    style={{ 
                        padding: 10,
                        borderWidth: 1,
                        borderColor: 'black',
                        fontSize: 19,
                        margin: 10,
                        borderRadius: 10,
                    }}>
                {item.title}
                </Text>
            </View>
            </TouchableOpacity>
        );
        }}
    />
)};

export default Categories;