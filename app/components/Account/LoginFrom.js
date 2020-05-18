import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from "../../utils/validations";
import Loading from "../../components/Loading";
import { isEmpty } from "lodash";
import * as firebase from "firebase";

const LoginFrom = (props) => {
  const { toastRef } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [formData, setformData] = useState(defaulFormValue());

  const Navigation = useNavigation();

  const onChange = (e, type) => {
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("Introduce un email valido");
    } else {
      setloading(true)
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setloading(false)
          Navigation.navigate("Account")
          
        })
        .catch(() => {
          setloading(false);
          toastRef.current.show("Correo o contraseña incorrecta");
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputFrom}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.icon}
          />
        }
      />
      <Input
        placeholder="contraseña"
        containerStyle={styles.inputFrom}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={showPassword ? styles.iconActive : styles.icon}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
      />
      <Button
        title="Inicar sesión"
        containerStyle={styles.btnSession}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="iniciando sesión" />
    </View>
  );
};
export default LoginFrom;

function defaulFormValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputFrom: {
    width: "100%",
    marginTop: 30,
  },
  btnSession: {
    width: "95%",
    marginTop: 20,
  },
  btnLogin: {
    backgroundColor: "#690589",
  },
  icon: {
    color: "#c1c1c1",
  },
  iconActive: {
    color: "#690589",
  },
});
