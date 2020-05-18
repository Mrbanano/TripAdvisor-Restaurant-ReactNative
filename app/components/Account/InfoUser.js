import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'


const InfoUser = (props) => {

  const { userInfo, toastRef } = props;
  const { photoURL, displayName, email } = userInfo;
  const Randon = getRandomInt(0,99999);

  const changeAvartar = async() =>{
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    const resultPermissionsCamera= resultPermissions.permissions.cameraRoll.status
    if(resultPermissionsCamera === "denied"){
      toastRef.current.show('Es necesario aceptar los permisos')
    }else{
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        aspect:[4,3]
      })

      console.log(result)
    }
  }

  return (
    <View style={styles.viewuserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
        onEditPress={changeAvartar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../../assets/img/AvatarDefault.jpg")
        }
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : `User-guest-${Randon}`}
        </Text>
        <Text>{email ? email : "Usuario Facebook"}</Text>
      </View>
    </View>
  );
};

export default InfoUser;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const styles = StyleSheet.create({
  viewuserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
