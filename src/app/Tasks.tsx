import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { router } from "expo-router";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  // Carrega as tarefas ao abrir a tela
  useEffect(() => {
    AsyncStorage.getItem("@App1").then((data) => {
      if (data) setTasks(JSON.parse(data));
    });
  }, []);

  // Adiciona uma nova tarefa
  async function adicionarTarefa() {
    if (!task.trim()) return;
    const novasTarefas = [...tasks, task];
    await AsyncStorage.setItem("@App1", JSON.stringify(novasTarefas));
    setTasks(novasTarefas);
    setTask("");
    Alert.alert("Tarefa adicionada com sucesso!");
  }

  // Remove uma tarefa
  async function removerTarefa(index: number) {
    const novasTarefas = tasks.filter((_, i) => i !== index);
    await AsyncStorage.setItem("@App1", JSON.stringify(novasTarefas));
    setTasks(novasTarefas);
    Alert.alert("Tarefa removida com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>
      <Input
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} />
      <Button
        style={styles.buttonvoltar}
        title="Voltar"
        onPress={router.back}
      />
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Tarefas Salvas:</Text>

      <View style={styles.containerTarefas}>
        {tasks.length === 0 && <Text>Nenhuma tarefa encontrada.</Text>}
        {tasks.map((t, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text style={{ flex: 1 }}>{t}</Text>
            <Button
              title="Remover"
              onPress={() => removerTarefa(i)}
              style={{
                width: 80,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#E15610",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 10,
    position: "relative",
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  buttonvoltar: {
    position: "absolute",
    top: 30,
    left: 16,
    width: 70,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#E15610",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  containerTarefas: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
});
