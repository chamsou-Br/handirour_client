import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import bg from "../../assets/register1.png";
import logo from "../../assets/logo.png";

function LoginScreeen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr , setEmailErr] = useState('')
  const [passwordErr , setPasswordErr] = useState("")

  // login function
  const _onLigin = () => {};

  return (
    <ScrollView >
      <ImageBackground
        resizeMode="stretch"
        source={bg}
        style={Styles.container}
      >
        <View style={Styles.imageContainer}>
          <Image source={logo} style={Styles.imagelogo} />
        </View>
        <View>
          <View style={Styles.InputContainer}>
            <TextInput
              style={Styles.Input}
              value={email}
              placeholder='Exemple@gmail.com'
              onChangeText={(v) => setEmail(v)}
            />

          </View>
          <Text style={Styles.TextErr}>{emailErr}</Text>
          <View style={Styles.InputContainer}>
            <TextInput
              style={Styles.Input}
              placeholder='********'
              secureTextEntry
              value={password}
              onChangeText={(v) => setPassword(v)}
            />

          </View>
          <Text style={Styles.TextErr}>{passwordErr}</Text>
          <TouchableOpacity style={Styles.buttonContainer}>
            <Text style={Styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({

  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height ,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  imagelogo: {
    width: 200,
    height: 200,
  },
  FormContainer: {

  },
  InputContainer: {
    borderRadius: 7,
    overflow: "hidden",
    marginTop: 7,
    elevation : 1
  },
  Input: {
    width: Dimensions.get("screen").width * 0.8,
    height: 58,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight : "600",
    color: "#000000CC",
  },
  buttonContainer: {
    width: Dimensions.get("screen").width * 0.8,
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
  TextErr : {
    fontSize : 14 , 
    color  : 'red',
    fontWeight : "600",
    marginLeft : 5
  }
});
export default LoginScreeen;
