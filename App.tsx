
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Login from "@/app/login";

import { Button } from "@/components/button";

export default function App() {

  function handleNext() {
    router.navigate("/Tasks");
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>To-Do List</Text>
      
      <Text style={styles.text}>
        É uma ferramenta de organização que ajuda a manter o foco e a lembrar
        das coisas que precisam ser feitas.{" "}
      </Text>
     
      <Login />
      
      <Button title="Entrar" onPress={handleNext} activeOpacity={0.3} />
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
