import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {KeyboardAwareScrollView}from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../components/Account/RegisterForm'

const Register = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.img}
      />
      <View style={styles.viewForm}>
        <RegisterForm/>
      </View>
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