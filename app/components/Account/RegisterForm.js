import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import {size, isEmpty} from 'lodash'
import {validateEmail} from '../../utils/validations'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue())
  
  const onSubmit = ()=>{
    if(isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)){
      console.log('todos los campos son obligatorios')
    }else{
      if(validateEmail(formData.email)){
        console.log('el email no es valido')
      }else{
        
      }
    }
  }

  const onChange = (e,type)=>{
    setFormData({...formData, [type]:e.nativeEvent.text})
  }
  
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.icon}
          />
        }
        onChange={(e) => onChange(e, "email")}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
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
        onChange={(e) => onChange(e, "password")}
      />
      <Input
        placeholder="Confirma tu contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPasswordRepeat ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPasswordRepeat ? "eye-off-outline" : "eye-outline"}
            iconStyle={showPasswordRepeat ? styles.iconActive : styles.icon}
            onPress={() => {
              setShowPasswordRepeat(!showPasswordRepeat);
            }}
          />
        }
        onChange={(e) => onChange(e, "repeatPassword")}
      />
      <Button
        title="Registrar"
        containerStyle={styles.btnResitrer}
        buttonStyle={styles.btnRegiter}
        onPress={onSubmit}
      />
    </View>
  );
};

export default RegisterForm;

function defaultFormValue(){
  return{
    email: "",
    password: "",
    repeatPassword:""
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  btnRegiter: {
    backgroundColor: "#00a680",
  },
  icon: {
    color: "#c1c1c1",
  },
  iconActive: {
    color: "#00a680",
  },
});
