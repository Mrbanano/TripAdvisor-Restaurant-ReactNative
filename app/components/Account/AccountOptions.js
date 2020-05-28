import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { map } from "lodash";
import Modal from "../../components/Modal";

const AccountOptions = (props) => {
  const { userInfo, toastRef, setloading, settextLoading } = props;
  const [isVisible, setisVisible] = useState(false);
  const [renderComponet, setrenderComponet] = useState(null);

  const selectComponent = (key) => {
    switch (key) {
      case "displayName":
        setrenderComponet(<Text>Cambiando nombre y apellido</Text>);
        setisVisible(true);
        break;

      case "email":
        setrenderComponet(<Text>Cambiando email</Text>);
        setisVisible(true);
        break;

      case "password":
        setrenderComponet(<Text>Cambiando constraseña</Text>);
        setisVisible(true);
        break;

      default:
        setrenderComponet(false);
        break;
    }
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
      {renderComponet && (
        <Modal isVisible={isVisible} setisVisible={setisVisible}>
          {renderComponet}
        </Modal>
      )}
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
