import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'

const RegisterForm = () => {
  return (
    <View style={styles.formContainer}>
      <Input placeholder="Email" containerStyle={styles.inputForm} />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirma tu contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Button
        title="Registrar"
        containerStyle={styles.btnResitrer}
        buttonStyle={styles.btnRegiter}
      />
    </View>
  );
}

export default RegisterForm

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnResitrer: {
    marginTop: 20,
    width: "95%",
  },
  btnRegiter:{
    backgroundColor: "#00a680"
  }
});
