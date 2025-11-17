import { theme } from "@/src/app/theme/theme"
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:'center',
        gap: 20
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: 400,
        height: 750,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
        justifyContent: "space-around"
    },

    whiteCard:{
        width:"90%",
        height: 300,
        backgroundColor: "#FFF",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 3,
        padding: 30,
        gap:30,
    }
})