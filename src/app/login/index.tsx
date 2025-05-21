import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { router } from "expo-router";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Logo from "@/assets/logo.png";

export default function Index() {


  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} />
      </View>
      
       <Text style={styles.title}>
          Bem Vindo de volta!{"\n"}
          Faça login para continuar
        </Text>
      
      
      <View style={styles.boxMid}>
        <Text style={styles.text}>Endereço de E-mail</Text>
       <Input
               placeholder="Digite o E-mail"
             />

        <Text style={styles.text}>Senha</Text>
        <Input
          placeholder="Digite a Senha"
          secureTextEntry={true}
        />

      </View>


       <Button
              title="Voltar"
              onPress={router.back}
            />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF", // tom lavanda mais suave
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  boxTop: {
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    marginBottom: 16,
  },
  boxMid: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 24,
  },
  title: {
    color: "#6D28D9",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
    letterSpacing: 0.5,
  },
  text: {
    color: "#6D28D9",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 8,
  },
});