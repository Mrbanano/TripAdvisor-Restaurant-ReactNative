import React,{useRef, useEffect, useState}from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import * as firebase from 'firebase'

import InfoUser from '../../components/Account/InfoUser'
import AccountOptions from '../../components/Account/AccountOptions'

const UserLogin = () => {

  const toastRef = useRef()
  const [loading, setloading] = useState(false)
  const [textLoading, settextLoading] = useState("Cargando")
  const [userInfo, setuserInfo] = useState(null)
  useEffect(() => {
    
    (async()=>{
      const user = await firebase.auth().currentUser;
      setuserInfo(user)
    })()

  }, [])


  return (
    <View style={styles.viewUserInfo}>
      
      {userInfo && <InfoUser userInfo={userInfo} toastRef={toastRef}/>}
      <AccountOptions />
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.closeSession}
        titleStyle={styles.closeSessionText}
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={loading} text={textLoading} />
    </View>
  );
}
 
export default UserLogin


const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  closeSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#690589",
    borderBottomWidth: 1,
    borderBottomColor: "#690589",
    paddingTop: 10,
    paddingBottom: 10,
  },
  closeSessionText: {
    color: "#690589",
  },
});