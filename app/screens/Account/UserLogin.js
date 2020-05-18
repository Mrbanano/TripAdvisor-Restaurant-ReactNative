import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import * as firebase from 'firebase'

const UserLogin = () => {
  return (
    <View>
      <Text>Login User</Text>
      <Button
        title="Cerrar sesión"
        onPress={()=>{
          firebase.auth().signOut()
        }}
      />
    </View>
  )
}

export default UserLogin
