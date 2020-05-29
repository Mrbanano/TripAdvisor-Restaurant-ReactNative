import React from 'react'
import { StyleSheet } from 'react-native'
import {Overlay} from 'react-native-elements'

const Modal = (props) => {

  const {isVisible, setisVisible, children}= props
  const  closeModal = () => {setisVisible(false)}
  
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.6)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
      onBackdropPress={()=>{
        closeModal()
      }}
    >
      {
        children
      }
    </Overlay>
  )
}


export default Modal

const styles = StyleSheet.create({
  overlay:{
    height:"auto",
    width:"89%",
    backgroundColor:"#fff"
  }
})
