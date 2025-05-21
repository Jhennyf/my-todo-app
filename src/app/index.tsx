import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";

export default function Index() {
  function handleNext() {
    router.navigate("/Tasks");
  }

  // Função para navegar para a tela de login
  function handleLogin() {
    router.navigate("/login");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>To-Do List</Text>

      <Text style={styles.text}>
        É uma ferramenta de organização que ajuda a manter o foco e a lembrar
        das coisas que precisam ser feitas.
      </Text>

      <Button title="Login" onPress={handleLogin} activeOpacity={0.3}  />
      <Button title="Iniciar" onPress={handleNext} activeOpacity={0.3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "Black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  text: {
    color: "Gray",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 10,
  },
});