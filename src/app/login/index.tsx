import React from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

import { router } from "expo-router";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Logo from "@/assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { THEMAS } from "@/global/themas";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function Index() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  async function getLogin() {
    try {
      
      if (!email || !password) {
        return Alert.alert("Preencha todos os campos");
      }

        Alert.alert("Login realizado com sucesso");
     

    } catch (error) {
      Alert.alert("Erro ao realizar login");
    }
  }

  function handleNext() {
    router.navigate("/login/cadastro");
  }

  return (
    //logo
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} />
      </View>

      {/* Titulo */}
      <Text style={styles.title}>
        Bem Vindo de volta!{"\n"}
        Faça login para continuar
      </Text>

      {/* Inputs */}
      {/* E-mail e Senha */}
      <View style={styles.boxMid}>
        <Text style={styles.text}>Endereço de E-mail</Text>
        <View style={styles.boxInput}>
          <Input
            placeholder="Digite o E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={24} color={THEMAS.Colors.purple} />
        </View>

        <Text style={styles.text}>Senha</Text>
        <View style={styles.boxInput}>
          <Input
            placeholder="Digite a Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons name="lock" size={24} color={THEMAS.Colors.purple} />
        </View>
      </View>

      <Button title="Entrar" onPress={() => getLogin()} />

      <Text style={styles.textBottom} onPress={handleNext}>Não possui conta? Crie Agora!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  boxTop: {
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    marginBottom: 16,
    position: "absolute",
    top: 25,
    left: 25,
    right: 25,
  },
  boxMid: {
    width: "100%",
    maxWidth: 400,
    height: "auto",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 24,
  },
  boxInput: {
    width: "100%",
    height: 56,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEMAS.Colors.white,
    borderColor: THEMAS.Colors.purple,
  },
  title: {
    color: THEMAS.Colors.purple,
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
    letterSpacing: 0.5,
  },
  text: {
    color: THEMAS.Colors.purple,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 8,
  },
  textBottom: {
    fontSize: 14,
    color: "#6D28D9",
    fontWeight: "600",
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
  },
});
