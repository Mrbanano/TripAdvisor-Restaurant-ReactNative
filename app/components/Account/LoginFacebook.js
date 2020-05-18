import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as facebook from "expo-facebook";
import { FacebookApi } from "../../utils/social";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading";

const LoginFacebook = (props) => {
  const { toasRef } = props;
  const Navigation = useNavigation();
  const [loading, setloading] = useState(false);

  const login = async () => {
    await facebook.initializeAsync(FacebookApi.aplicaction_id);
    const { type, token } = await facebook.logInWithReadPermissionsAsync({
      permissions: FacebookApi.permissions,
    });

    if (type === "success") {
      setloading(true);
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          setloading(false);
          Navigation.navigate("Account");
        })
        .catch(() => {
          setloading(false);
          toastRef.current.show("Algo salio mal");
        });
    } else if (type === "cancel") {
      setloading(false);
      toastRef.current.show("Inicio de sesion cancelado");
    } else {
      setloading(false);
      toastRef.current.show("Algo salio mal");
    }
  };

  return (
    <View>
      <SocialIcon
        title="Inicia Session con Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={loading} text="Conectando a Facebook" />
    </View>
  );
};

export default LoginFacebook;

const styles = StyleSheet.create({});
