import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";

const CreateAccount = () => {
  return (
    <Text style={styles.txtRegister}>
      ¿Aun no tienes una cuenta?{" "}
      <Text 
      style={styles.btnRegister}
      onPress={()=> console.log('registro')}
      >Registrate</Text>
    </Text>
  );
};

const Login = () => {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.view}>
        <Text>Login form</Text>
        <CreateAccount></CreateAccount>
      </View>
      <Divider style={styles.divider}/>
      <Text>Social media</Text>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  view: {
    marginLeft: 40,
    marginRight: 40,
  },
  txtRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider:{
    backgroundColor:"#00a680",
    margin:40
  }
});
