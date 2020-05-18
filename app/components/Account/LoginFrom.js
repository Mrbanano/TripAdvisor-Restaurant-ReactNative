import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const LoginFrom = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputFrom}
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
      />
    </View>
  );
};

export default LoginFrom;

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
