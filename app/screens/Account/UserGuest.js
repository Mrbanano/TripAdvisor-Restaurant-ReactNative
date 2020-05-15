import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

const UserGuest = () => {
  return (
    <ScrollView centerContent={true} style={styles.viewbody}>
      <Image
        style={styles.image}
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu pefil de 5 tenedores</Text>
      <Text style={styles.subtitle}>
        ¡Como describirias tu mejor restaurante ? busca y visualiza los mejores
        restaurantes de una forma senscilla, vota cual te ha gustado mas y
        comenta como ha sido tu experiencia
      </Text>
      <View  style={styles.viewBtn}>
        <Button 
        title="Ver perfil" 
        buttonStyle={styles.BtnStyle} 
        containerStyle={styles.BtnContainer}
        onPress={()=>{console.log('hey')}} />
      </View>
    </ScrollView>
  );
};

export default UserGuest;

const styles = StyleSheet.create({
  viewbody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 9,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn:{
    flex:1,
    alignItems:"center"
  },
  BtnStyle: {
    backgroundColor: "#00a680",
  },
  BtnContainer:{
    width:"80%"
  },
});
