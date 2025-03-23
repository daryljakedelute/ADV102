import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
export default function exerciseHome(){

    const Links = [
        {to: "/exercise_4/useState/state" as const,
         name: "UseState screen"},

        {to: "/exercise_4/useEffect/useEffect" as const,
         name: "UseEffect screen"},
    ]

    return (
        <View style={style.container}>
        {Links.map((link, i) => (
            <Link key={i} href={`${link.to}`} style={style.buttons}>
                <Text>{link.name}</Text>
            </Link>
        ))}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        backgroundColor: "#F5F7FA", // Light background for a clean UI
        padding: 20,
    },
    buttons: {
        backgroundColor: "#007AFF", // Nice blue color for buttons
        borderRadius: 12, // Softer rounded corners
        paddingVertical: 12,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: "600",
        color: "#FFF",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4, // Android shadow effect
        borderWidth: 0, // Removing border for a modern look
    }
});
