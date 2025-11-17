import { theme } from "@/src/app/theme/theme"
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:'center',
    },

    container_02:{
        alignItems:'center',
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: 400,
        paddingBottom:20,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
        justifyContent: "space-around",
        marginBottom: 5
    },

    whiteCard:{
        width:"90%",
        backgroundColor: "#FFF",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 3,
        padding: 30,
        gap:30,
    }
})