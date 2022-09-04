import { Avatar } from "react-native-image-avatars";
import { BackgroundImage } from "@rneui/base";
import Icon from "react-native-vector-icons/Ionicons";
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

const ProfileScreen = ({route}) => {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateDeNaissance, setDateDenaissance] = useState("");
  const [genre, setgenre] = useState("Homme");
  const [wilaya, setWilaya] = useState("Sétif");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [typeDincapacite, settypeDincapacite] = useState("Mobilité/Physique");
  const [showDatePicker, setShowDatepicker] = useState(false);
  const [picture, setPicture] = useState(null);
  const [path, setPath] = useState("");

  return (
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.formContainer}>
          <View style={Styles.header}>
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                width: "85%",
                alignSelf: "center",
                alignItems: "center",
                height: 50,
                justifyContent: "space-between",
              }}
            >
              <Icon
                name="log-out-outline"
                onPress={() => route.params.setAuth(false)}
                size={22}
                style={{
                  color: "#FFF",
                  alignSelf: "center",
                }}
              />
              <Icon
                // icon={name}
                name="notifications-outline"
                size={22}
                style={{
                  color: "#FFF",
                  alignSelf: "center",
                }}
              />
            </View>
          </View>
          <View
            style={{
              zIndex: 200,
              alignItems: "center",
              borderRadius: 30,
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
              top: 50,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                height: Dimensions.get("screen").height * 0.17,
                top: 20,
                alignItems: "center",
              }}
            >
              <Avatar
                imageUrl="https://avatars.githubusercontent.com/u/13950389?v=4"
                size="small"
                borderColor="#f2f2f2"
                shadow
              />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "black",
                }}
              >
                Akram Mezaache
              </Text>
            </View>
            <InputRegistre
              value={nom}
              label="Nom"
              placeHolder={"Akram"}
              onChange={(v) => {
                setnom(v);
              }}
            />
            <InputRegistre
              value={prenom}
              label="Prenom"
              placeHolder={"Mezaache"}
              onChange={(v) => {
                setprenom(v);
              }}
            />

            <InputRegistre
              value={email}
              label="Email"
              placeHolder={"akramchat@hotmail.com"}
              onChange={(v) => {
                setemail(v);
              }}
            />
            <InputRegistre
              value={password}
              label="mot de pass"
              onChange={(v) => {
                setpassword(v);
              }}
              placeHolder="********"
            />
            <InputRegistre
              value={password2}
              label="Nouveau mot de pass"
              onChange={(v) => {
                setpassword2(v);
              }}
              placeHolder="********"
            />
            <TouchableOpacity style={Styles.buttonContainer}>
              <Text style={Styles.textButton}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#859DFF",
    // height:  Dimensions.get('screen').height
  },
  formContainer: {
    display: "flex",
    minHeight: Dimensions.get("window").height,
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
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
  header: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("screen").width,
    height: 100,
    backgroundColor: "#859DFF",
    zIndex: 20,
  },
});
export default ProfileScreen;
