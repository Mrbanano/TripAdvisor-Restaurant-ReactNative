import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

const Loading = (props) => {
  const { isVisible, text } = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.Overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#690589" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};

export default Loading;

const styles = StyleSheet.create({
  Overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#690589",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#690589",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
