import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const InfoUser = (props) => {
  const { userInfo, toastRef } = props;
  const { photoURL, displayName, email, uid } = userInfo;
  const Randon = getRandomInt(0, 99999);

  const changeAvartar = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionsCamera =
      resultPermissions.permissions.cameraRoll.status;
    if (resultPermissionsCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (result.cancelled) {
        toastRef.current.show("Se a cancelado el cambio de Avatar");
      } else {
        UploadFirebaseImg(result.uri)
          .then(() => {
            updatePhotoUrl();
            toastRef.current.show("Foto actualizada ");
          })
          .catch(() => {
            toastRef.current.show("Algo salio mal");
          });
      }
    }
  };

  const UploadFirebaseImg = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`Avatar/${uid}`);
    return ref.put(blob);
  };

  const updatePhotoUrl = () => {
    firebase
      .storage()
      .ref(`Avatar/${uid}`)
      .getDownloadURL()
      .then(async(Response) => {
        const update ={
          photoURL: Response
        }
        await firebase.auth().currentUser.updateProfile(update)
      });
  };

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
