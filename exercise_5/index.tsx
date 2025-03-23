import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
export default function exerciseHome(){

const [name, setName] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [image, setImage] = useState<string | null>(null);

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}

            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Register" />
        </View>
    );
}  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FCEFF9", 
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#5A189A", 
        marginBottom: 8,
        fontFamily: "Arial", 
    },
    description: {
        fontSize: 18,
        color: "#6D6875", 
        marginBottom: 20,
        textAlign: "center",
        fontFamily: "Georgia", 
    },
    input: {
        width: "100%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#B5838D", 
        borderRadius: 10, 
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        fontSize: 16,
        fontFamily: "Verdana", 
        marginBottom: 12,
    },
    button: {
        width: "100%",
        padding: 12,
        backgroundColor: "#FF006E", 
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4,
        marginTop: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Helvetica",
    },
    image: {
        width: 220,
        height: 220,
        borderRadius: 15, 
        marginBottom: 15,
    }
});
