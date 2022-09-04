import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, sizes, spacing} from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
// import { View,Text } from 'react-native'; 
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const ReservationCard = ({reservation}) => {
    return(
    <View style={styles.container}>
        <LinearGradient style={{width: '100%', borderRadius: 15, opacity: 0.8}} colors={['#859DFF', '#859DFF99', '#fff']}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.text}>Reservation N : {reservation.id}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{ height: 20, borderRadius: 4, alignItems: 'center'}}>
                        <Text style={{color: colors.light, fontWeight:'bold', borderRadius: 4, width: '100%', marginLeft: 10}}>{reservation.montant} Da</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon 
                            name='reload-circle-sharp'
                            size={25}
                            style={{margin: 3, color: 'orange'}}
                        />
                        <Icon 
                            name='ios-ellipsis-vertical'
                            size={20}
                        />
                    </View>
                </View>
                
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>{reservation.dateD} - {reservation.dateF}</Text>
                <Text style={styles.text}>2 Chembre Luxery</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>{reservation.hotel}</Text>
            </View>
        </LinearGradient>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '87%',
        borderRadius: 15,
        margin: 10,
        backgroundColor: 'white',
        elevation: 5,
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight:'bold'
    },
    content: {
        flexDirection: 'row',
        width: '90%', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        alignSelf: 'center',
        margin: 3,
    },
    text :{
        fontWeight:'bold',
        marginBottom: 3,
        fontSize : 12,
        letterSpacing : 0.7,
        color: colors.primary
    }
})

export default ReservationCard;