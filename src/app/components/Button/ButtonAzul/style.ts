import { StyleSheet } from "react-native"
import { theme } from "../../../theme/theme"

export const style = StyleSheet.create({
    button:{
        width: 300,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.azul,
        borderRadius: 15,
        elevation: 3
    },

    title:{
        fontSize: 20,
        fontStyle:"normal",
        color:"#FFF",
        fontWeight: "bold"
    }
})