import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
const InfoUser = (props) => {
  const { userInfo } = props;
  const { photoURL, displayName, email } = userInfo;
  const Randon = getRandomInt(0,99999);
  return (
    <View style={styles.viewuserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
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
