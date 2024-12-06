// Página home, principal do projeto

import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function HomeScreen() {
    const navigation = useNavigation()
    const navigateToNavigationScreen = ()=> {
        navigation.navigate('Navigation')
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, mundo!</Text>
            <StatusBar style="auto" />
            <TouchableOpacity active opacity={0.8} style={styles.button} onPress={navigateToNavigationScreen}>
                <Text style={styles.buttonText}>Aula de Navegação</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        color: "#f64348",
    },
    buttonText: {
        color: "#232323",
    }
})