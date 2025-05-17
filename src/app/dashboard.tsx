import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Button title="voltar" onPress={() => router.back()} />
        </View>
    )
}

export const styles = StyleSheet.create({
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
    },
})