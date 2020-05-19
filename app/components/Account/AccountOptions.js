import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { map } from "lodash";
import Modal from "../../components/Modal";

const AccountOptions = (props) => {
  const { userInfo, toastRef, setloading, settextLoading } = props;
  const selectComponent = (key) => {
    console.log(key);
  };

  const menuOptions = generateOptions(selectComponent);

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={{
            type: menu.iconType,
            name: menu.iconNameLeft,
            color: menu.iconColor,
          }}
          rightIcon={{
            type: menu.iconType,
            name: menu.iconNameRight,
            color: menu.iconColorRigth,
          }}
          containerStyle={styles.menuItem}
          onPress={menu.onPress}
        />
      ))}
      <Modal isVisible={true}>
          <Text>Hola</Text>
      </Modal>
    </View>
  );
};

function generateOptions(selectComponent) {
  return [
    {
      title: "Cambiar nombre y apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColor: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRigth: "#ccc",
      onPress: () => selectComponent("displayName"),
    },
    {
      title: "Cambiar email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColor: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRigth: "#ccc",
      onPress: () => selectComponent("email"),
    },
    {
      title: "Cambiar constraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColor: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRigth: "#ccc",
      onPress: () => selectComponent("password"),
    },
  ];
}

export default AccountOptions;

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});
