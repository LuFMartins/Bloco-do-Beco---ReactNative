import { theme } from "@/src/app/theme/theme"
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:'center' 
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: 400,
        minHeight: 800,
        borderRadius: 30,
        elevation: 5,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"space-around",
        paddingEnd: 20,
        paddingStart: 20,
    },

    whiteCard:{
        width:"100%",
        backgroundColor: "#FFF",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 3,
        padding: 30,
        gap:30,
    }
})