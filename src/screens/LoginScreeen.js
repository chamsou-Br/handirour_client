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
  TouchableOpacity,
  Pressable
} from "react-native";
import bg from "../../assets/register1.png";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function LoginScreeen({route}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr , setEmailErr] = useState('')
  const [passwordErr , setPasswordErr] = useState("")
  const navigation = useNavigation()

  // login function
  const _onLogin = async() => {
    const res = await axios.post("http://192.168.1.129:5000/Auth/login",{
      email : email , 
      password : password
    })
    if (res.data.err) {
      setEmailErr(res.data.err.email) 
      setPasswordErr(res.data.err.password)
      setEmail("")
      setPassword("")
    }else {
      console.log(res.data)
    }
  };

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
              onFocus={()=> {
                setEmailErr('')
                setPasswordErr("")
              }}
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
              onFocus={()=> {
                setPasswordErr("")
                setEmailErr('')
              }}
              onChangeText={(v) => setPassword(v)}
            />

          </View>
          <Text style={Styles.TextErr}>{passwordErr}</Text>
          <TouchableOpacity 
         // onPress={()=> _onLogin()} 
         onPress={()=> route.params.setAuth(true)}
          style={Styles.buttonContainer}>
            <Text style={Styles.textButton}>Login</Text>
          </TouchableOpacity>
          <Pressable 
              onPress={()=> navigation.navigate('RegisterScreen') }
              
              >
          <Text style={Styles.login}>vous n'aves pas un compte !</Text>
          </Pressable>
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
  },
  login : {
    marginTop : 10,
    color : '#859DFF',
    fontWeight : "bold",
    textAlign : "center",
    fontSize  : 14
  }
});
export default LoginScreeen;
