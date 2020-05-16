import React,{useRef} from 'react'
import { StyleSheet,View,Image } from 'react-native'
import Toast from "react-native-easy-toast";
import {KeyboardAwareScrollView}from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../components/Account/RegisterForm'

const Register = () => {

  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.img}
      />
      <View style={styles.viewForm}>
        <RegisterForm 
          toastRef={toastRef}
        />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
  )
} 

export default Register

const styles = StyleSheet.create({
  img: { 

    width:"100%",
    height:150,
    marginTop:20
    
  },
  viewForm:{
    marginLeft:40,
    marginRight:40
  }
})
