import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SocialIcon}from "react-native-elements"

const LoginFacebook = () => {
  const login = () =>{
    console.log('login')
  }
  
  return (
    <SocialIcon
      title="Inicia Session con Facebook"
      button
      type="facebook"
      onPress={
        login
      }
    />
  )
}

export default LoginFacebook

const styles = StyleSheet.create({})
