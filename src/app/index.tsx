import {View, Text, Alert, Button} from "react-native";
import {StyleSheet} from "react-native";

export default function Index(){
    function handleMessage(){
        console.log("testee");
        return Alert.alert("Hello React Native");
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello React</Text>

            <Button title="Enviar" onPress={handleMessage}/>
        </View>
    )
}

const styles = StyleSheet.create({

     container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },

    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
})