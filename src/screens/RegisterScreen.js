import { BackgroundImage } from "@rneui/base";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import InputRegistre from "../components/InputRegistre";
import SelectInput from "../components/SelectInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
//import DatePicker from the package we installed
import DateTimePicker from "@react-native-community/datetimepicker";

function RegisterScreen() {

  // state of registe Form
  const [date, setDate] = useState(new Date());
  const [dateDeNaissance , setDateDenaissance] = useState("12-12-2002")
  const [showDatePicker, setShowDatepicker] = useState(false);
  const [picture, setPicture] = useState(null)
  const [path , setPath] = useState("image.jpg")

  // function to get picture
  const getImageFromgallerie = async () => {
    const Camrepermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (Camrepermission.status === "granted") {
      const ImageCapture = ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [9, 14],
        quality: 1,
        base64: true,
      });
      if (!(await ImageCapture).cancelled) {
       const  path = (await ImageCapture).uri.toString()
       setPath( path.split("/")[path.split("/").length - 1])
       setPicture((await ImageCapture))
      }
    }
  };

  //funcion to get birthday from dataPicker
  const onChangeDate = (event, selectedDate) => {
    setShowDatepicker(false);
    const currentDate = selectedDate || date;
    setDateDenaissance(currentDate.toString().split(" ")[3] + '-' + currentDate.toString().split(" ")[1] + '-' + currentDate.toString().split(" ")[2])
    setDate(currentDate);
  };

  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.formContainer}>
          <InputRegistre
            value={""}
            label="Nom"
            placeHolder={"nom"}
            onChange={() => {}}
          />
          <InputRegistre
            value={""}
            label="Prenom"
            placeHolder={"prenom"}
            onChange={() => {}}
          />
          <InputRegistre
            disabled={true}
            value={dateDeNaissance}
            label="Date de naissance"
            placeHolder={"12/12/2022"}
            onChange={() => {
              setShowDatepicker(true);
            }}
          />
          <SelectInput value={"Male"} label="Genre" onChange={() => {}} />
          <SelectInput value={"Setif"} label="Wilaya" onChange={() => {}} />
          <InputRegistre
            value={""}
            label="Email"
            placeHolder={"exemple@gmail.com"}
            onChange={() => {}}
          />
          <InputRegistre
            value={path}
            disabled={true}
            icon={"qrcode"}
            label="Handecape"
            placeHolder={""}
            onChange={() => {getImageFromgallerie()}}
          />
          <SelectInput
            value={"Mobilité/Physique"}
            label="Type d'incapacité"
            onChange={() => {}}
          />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode='date'
              display="default"
              onChange={onChangeDate}
              onError={()=>setShowDatepicker(false)}
            />
          )}

          <SelectInput
            value={"Mobilité/Physique"}
            label="Type d'incapacité"
            onChange={() => {}}
          />

          <TouchableOpacity style={Styles.buttonContainer}>
            <Text style={Styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#859DFF",
  },
  formContainer: {
    display: "flex",
    minHeight: Dimensions.get("window").height,
    alignItems: "center",
    width: Dimensions.get("screen").width,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 80,
    paddingBottom :40,
  },
  header: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("screen").width,
    height: 120,
    backgroundColor: "#859DFF",
    zIndex: 20,
  },
  buttonContainer: {
    width: Dimensions.get("screen").width * 0.8,
    alignSelf: "center",
    height: 50,
    borderRadius: 7,
    marginTop: 30,
    backgroundColor: "#859DFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default RegisterScreen;
