import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";

const ChangeDisplayNameForm = (props) => {

  const { displayName, setisVisible, toastRef } = props;


  return (
    <View style={styles.view}>
      <Input
        placeholder="Nombre y apellido"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name:"account-circle-outline",
          color:"#c2c2c2"
        }}
        defaultValue={displayName || "" }
      />
      <Button
        title="Cambiar nombre"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
};

export default ChangeDisplayNameForm;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#690589",
  },
});
