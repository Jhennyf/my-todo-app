import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { router } from "expo-router";

export default function AdicionaTarefa() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  // Carrega as tarefas ao abrir a tela
  useEffect(() => {
    AsyncStorage.getItem("@App1").then(data => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>
      <Input
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} />
      <Button title="Voltar" onPress={() => router.back()} />

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Tarefas Salvas:</Text>
      {tasks.map((t, i) => (
        <Text key={i}>{t}</Text>
      ))}
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
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
});
