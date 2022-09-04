import { BackgroundImage } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
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
import axios , {Axios, toFormData} from "axios";
import LinkBack from "../data/Backend";
import { useNavigation } from "@react-navigation/native";

function RegisterScreen({route}) {
  // state of registe Form
  const [nom, setnom] = useState("");
  const [nomErr, setnomErr] = useState("");
  const [prenom, setprenom] = useState("");
  const [prenomErr, setprenomErr] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateDeNaissance, setDateDenaissance] = useState("");
  const [dateDeNaissanceErr, setdateDeNaissanceErr] = useState("");
  const [genre, setgenre] = useState("Homme");
  const [genreErr, setgenreErr] = useState("");
  const [wilaya, setWilaya] = useState("Sétif");
  const [wilayaErr, setwilayaErr] = useState("");
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [password, setpassword] = useState("");
  const [passwordErr, setpasswordErr] = useState("");
  const [typeDincapacite, settypeDincapacite] = useState("Mobilité/Physique");
  const [typeIncapaciteErr, settypeIncapaciteErr] = useState("");
  const [showDatePicker, setShowDatepicker] = useState(false);
  const [picture, setPicture] = useState(null);
  const [pictureErr, setpictureErr] = useState("");
  const [path, setPath] = useState("");
  const navigation = useNavigation()

  useEffect(()=>{
    console.log(route.params.isAuth)
  },[])

  
  // function to get picture
  const getImageFromgallerie = async () => {
    const Camrepermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (Camrepermission.status === "granted") {
      const ImageCapture = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
        base64 : true,
        copyToCacheDirectory : false
      });
      if (! ImageCapture.cancelled) {
        const path =  ImageCapture.uri.toString();
        setPath(path.split("/")[path.split("/").length - 1]);    
        setPicture(ImageCapture.base64);
      }
    }
  };

  //funcion to get birthday from dataPicker
  const onChangeDate = (event, selectedDate) => {
    setShowDatepicker(false);
    const currentDate = selectedDate || date;
    setDateDenaissance(
      currentDate.toString().split(" ")[3] +
        "-" +
        currentDate.toString().split(" ")[1] +
        "-" +
        currentDate.toString().split(" ")[2]
    );
    setDate(currentDate);
  };

  const _onRegister = async () => {
    const res = await  axios.post("http://192.168.1.129:5000/Auth/register",{
        firstName : prenom,
        famillyName : nom,
        email : email,
        password : password,
        dateOfBirth : dateDeNaissance,
        sex : genre,
        typeHandicape : typeDincapacite,
        wilaya : wilaya,
        InfoCard : picture
      })
      if (res.data.err) {
        setnomErr(res.data.err.famillyName)
        setprenomErr(res.data.err.firstName)
        setemailErr(res.data.err.email)
        setpasswordErr(res.data.err.password)
        setdateDeNaissanceErr(res.data.err.dateOfBirth)
        setgenreErr(res.data.err.sex)
        setwilayaErr(res.data.wilaya)
        settypeIncapaciteErr(res.data.err.typeHandicape)
      }else {
        console.log(res.data)
      }
        
    }
   
    

  return (
    <ScrollView style={Styles.container}>              
      <ScrollView>
        <View style={Styles.formContainer}>
          <InputRegistre
            value={nom}
            err={nomErr}
            label="Nom"
            placeHolder={"nom"}
            onFocus={()=> {
              setnomErr("")
            }}
            onChange={(v) => {
              setnom(v);
            }}
          />
          <InputRegistre
            value={prenom}
            err={prenomErr}
            label="Prenom"
            placeHolder={"prenom"}
            onFocus={()=> {
              setprenomErr("")
            }}
            onChange={(v) => {
              setprenom(v);
            }}
          />
          <InputRegistre
            disabled={true}
            value={dateDeNaissance}
            err={dateDeNaissanceErr}
            label="Date de naissance"
            placeHolder={"2022-12-12"}
            onFocus={()=> {
              setdateDeNaissanceErr("")
            }}
            onChange={() => {
              setShowDatepicker(true);
            }}
          />
          <SelectInput
            items={["Homme", "Femmme"]}
            value={genre}
            label="Genre"
            onChange={() => {}}
          />
          <SelectInput
            items={["Alger", "Sétif", "Oran", "Annaba", "Jijel"]}
            value={wilaya}
            label="Wilaya"
            onChange={(v) => {setWilaya(v)}}
          />
          <InputRegistre
            value={email}
            err={emailErr}
            label="Email"
            placeHolder={"exemple@gmail.com"}
            onFocus={()=> {
              setemailErr("")
            }}
            onChange={(v) => {
              setemail(v);
            }}
          />
          <InputRegistre
            value={path}
            err={pictureErr}
            disabled={true}
            icon={"qrcode"}
            label="Handecape"
            placeHolder={"image.jpg"}
            onFocus={()=> {
                //
            }}
            onChange={() => {
              getImageFromgallerie();
            }}
          />
          <SelectInput
            value={typeDincapacite}
            err={typeIncapaciteErr}
            items={["Mobilité/Physique"]}
            onFocus={()=> {
                settypeIncapaciteErr("")
            }}
            label="Type d'incapacité"
            onChange={(v) => {
              settypeDincapacite(v);
            }}
          />
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
              onError={() => setShowDatepicker(false)}
            />
          )}

          <InputRegistre
            value={password}
            err={passwordErr}
            label="mot de pass"
            onFocus={()=> {
              setpasswordErr("")
            }}
            onChange={(v) => {
              setpassword(v);
            }}
            placeHolder="********"
          />

          <TouchableOpacity
          onPress={()=> route.params.setAuth(true)}
            // onPress={() => _onRegister()}
            style={Styles.buttonContainer}
          >
            <Text style={Styles.textButton}>Login</Text>
          </TouchableOpacity>
          <Pressable onPress={()=> navigation.navigate('LoginScreen') }>
          <Text style={Styles.login}>vous aves un compte !</Text>
          </Pressable>
          
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#859DFF",
    height: Dimensions.get("screen").height,
  },
  formContainer: {
    display: "flex",
    marginTop: 40,
    minHeight: Dimensions.get("window").height,
    alignItems: "center",
    width: Dimensions.get("screen").width,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  header: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("screen").width,
    height: 70,
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
  login : {
    marginTop : 10,
    color : '#859DFF',
    fontWeight : "bold",
    fontSize  : 14
  }
});

export default RegisterScreen;
