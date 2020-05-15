import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogin from "./UserLogin";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Text>Cargando...</Text>;

  return login ? <UserLogin /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
