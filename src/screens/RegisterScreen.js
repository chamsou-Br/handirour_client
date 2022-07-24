import { BackgroundImage } from '@rneui/base'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import bg from "../../assets/register1.png"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputRegistre from '../components/InputRegistre';
import SelectInput from '../components/SelectInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RegisterScreen() {
  return (
    <ScrollView >
        <View  style={Styles.container} >
            <InputRegistre label="Nom" placeHolder={"nom"} onChange={()=>{}} />
            <InputRegistre  label="Prenom" placeHolder={"prenom"} onChange={()=>{}} />
            <InputRegistre  label="Date de naissance" placeHolder={"12/12/2022"} onChange={()=>{}} />
            <SelectInput value={"Male"} label='Genre' onChange={()=>{}}/>
            <SelectInput value={"Setif"} label='Wilaya' onChange={()=>{}}/>
            <InputRegistre  label="Email" placeHolder={"exemple@gmail.com"} onChange={()=>{}} />
            <SelectInput value={"Mobilité/Physique"} label="Type d'incapacité" onChange={()=>{}}/>
        
            <TouchableOpacity style={Styles.buttonContainer}>
                <Text style={Styles.textButton}>Login</Text>
            </TouchableOpacity>
        </View>


    </ScrollView>
  )

}

const Styles  = StyleSheet.create({
    container : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : Dimensions.get('screen').width,
        minHeight : Dimensions.get('screen').height,
    },
    buttonContainer: {
        width: Dimensions.get("screen").width * 0.8,
        alignSelf : 'center',
        height: 50,
        borderRadius: 7,
        marginTop: 30,
        backgroundColor: "#859DFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation : 1
      },
      textButton: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
      },
   
}) 

export default RegisterScreen