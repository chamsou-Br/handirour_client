import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



function InputRegistre({label,placeHolder,icon,value,onChange,disabled}) {

  return (
    <Pressable style={Styles.container} onPress={()=>disabled ? onChange() : null}>
    <Text style={Styles.label} >{label}</Text>
    <View style={Styles.inputContainer} >
       <TextInput style={Styles.Input}
       value={value.toString()}
       editable={!disabled}
       onChangeText={(v) => onChange(v)}
       placeholder={placeHolder}
       placeholderTextColor="#000000BB" 
        />
        {icon ? <MaterialCommunityIcons name={icon} color="#000000AA" size={24}  /> : null }
    </View>
</Pressable>
  )
}

const Styles = StyleSheet.create({
    container : {
        marginTop : 10
    },
    inputContainer : {
        display : 'flex',
        flexDirection : "row",
        borderBottomWidth : 0.8,
        borderColor : "#00000055",
        width:  Dimensions.get("screen").width * 0.75
    },
    label : {
        color : "#00000033",
        fontSize : 17,
        fontWeight : 'bold',
        letterSpacing : 1.2

    },
    Input : {
        backgroundColor : '#FFF' ,
        color : "#000000",
        width : Dimensions.get("screen").width * 0.7,
        fontWeight : '500',
        paddingHorizontal : 5,
        paddingVertical : 2
    },
})

export default InputRegistre