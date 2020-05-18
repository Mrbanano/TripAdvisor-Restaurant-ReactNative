import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const InfoUser = (props) => {
  const { userInfo } = props;
  console.log(userInfo);
  return (
    <View style={styles.viewuserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
      />
      <View>
        <Text style={styles.displayName}>Alvaro Castillo</Text>
        <Text>6666alvaro666@gmail.com</Text>
      </View>
    </View>
  );
};

export default InfoUser;

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
  displayName:{
    fontWeight:"bold",
    paddingBottom: 5
  }
});
