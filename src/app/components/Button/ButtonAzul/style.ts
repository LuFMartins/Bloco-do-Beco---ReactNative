import { StyleSheet } from "react-native"
import { theme } from "../../../theme/theme"

export const style = StyleSheet.create({
    button:{
        width: "60%",
        height: "8%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.azul,
        borderRadius: 15,
        elevation: 3
    },

    title:{
        fontSize: theme.fonts.h2,
        fontStyle:"normal",
        color:"#FFF",
        fontWeight: "bold"
    }
})