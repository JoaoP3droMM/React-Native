import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function NavigationScreen() {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text>Aula de Navegação</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={StyleSheet.button} 
                onPress={navigateBack}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#1c1a1d",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "fff"
    }
})