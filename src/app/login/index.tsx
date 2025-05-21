import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { styles } from "@/components/button/styles";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Login() {
    return (
        <View>
            <Text>
                Bem Vindo de volta!{"\n"}
                Faça login para continuar
            </Text>

            <Text>
                Email:
                <input type="email"/>
            </Text>
        </View>
    )
}