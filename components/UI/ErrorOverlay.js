import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message, })  {
    return (
    <View style={styles.container}> 
        <Text style={[styles.text, styles.title]}>An Error Occurred!</Text>
        <Text style={styles.text}>{message}</Text>
        {/* <Pressable onPress={onConfirm} style={styles.button}>
            <Text style={styles.buttonText}>Okay</Text>
        </Pressable> */}
    </View>
    );
}
export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
            marginTop: 16,
            paddingVertical: 6,
            paddingHorizontal: 12,
            backgroundColor: GlobalStyles.colors.primary500,
            borderRadius: 4,    
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',    
            fontWeight: 'bold',
        }
        });