import { Select } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

function SelectInput({value ,label, onChange}) {
  return (
    <View style={Styles.inputContainer}>
      <Text style={Styles.label} >{label}</Text>
      <Select
        defaultValue={value}
        borderWidth={0}
        color={"#000000BB"}
        paddingLeft={-0.5}
        width={Dimensions.get("screen").width * 0.75}
        fontWeight="500"
        fontSize={14}
        placeholder={value}
        placeholderTextColor="#000000BB" 
        onValueChange={(v) => onChange(v)}
      >
        <Select.Item label="Male" value="Male" />
        <Select.Item label="Female" value="Female" />
      </Select>
    </View>
  );
}
const Styles = StyleSheet.create({
    inputContainer : {
        display : 'flex',
        borderBottomWidth : 0.8,
        borderColor : "#00000055",
        marginTop : 10,
        
    },
    label : {
        color : "#00000033",
        fontSize : 17,
        fontWeight : 'bold',
        letterSpacing : 1.2

    },
})

export default SelectInput;
