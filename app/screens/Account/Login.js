import React,{useRef}from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginFrom from '../../components/Account/LoginFrom'
import Toast from 'react-native-easy-toast'
const CreateAccount = () => {
   const navigation = useNavigation();
  return (
    <Text style={styles.txtRegister}>
      ¿Aun no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Registrate
      </Text>
    </Text>
  );
};

const Login = () => {

  const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.view}>
        <LoginFrom toastRef={toastRef} />
        <CreateAccount></CreateAccount>
      </View>
      <Divider style={styles.divider} />
      <Text>Social media</Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
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
    color: "#690589",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#690589",
    margin: 40,
  },
});
