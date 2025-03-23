import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native"
import { Link } from "expo-router"
import { Animated } from 'react-native';
import 'raf/polyfill';



export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            Daryl Jake Delute
            </Text>
        </View>
        
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D2B', // Deep space blue
    },
    child1: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: 'rgba(25, 25, 112, 0.8)', // Cosmic blue with transparency
        justifyContent: 'center',
        gap: 50,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#BB86FC', // Neon purple
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
    },
    child2: {
        flex: 6,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // Galactic purple
    },
    child3: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 139, 0.7)', // Deep dark blue
    },
    child11: {
        width: 25,
        height: 25,
        backgroundColor: 'gold', // Glowing spice gold
        borderRadius: 12,
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
    },
    child12: {
        width: 25,
        height: 25,
        backgroundColor: 'hotpink',
        borderRadius: 12,
        shadowColor: 'pink',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
    },
    text: {
        color: '#FFFFFF', // Bright white to contrast the dark space
        fontSize: 34,
        fontWeight: 'bold',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        fontFamily: 'Courier', // Retro space font
    },
    animatedStar: {
        width: 10,
        height: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        position: 'absolute',
        opacity: 0.8,
    }
});

// Animation Logic
const starAnimation = new Animated.Value(0);

Animated.loop(
    Animated.sequence([
        Animated.timing(starAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }),
        Animated.timing(starAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        })
    ])
).start();

export { styles, starAnimation };
