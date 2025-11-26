import { theme } from "@/src/app/theme/theme"
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignContent:"center",
        alignItems:"center"
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: "90%",
        height:"95%",
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
        height:"auto",
        backgroundColor: "#FFF",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 15,
        elevation: 3,
        padding: 25,
        gap:30,
    },

    logo:{
        width:"80%",
        height:"30%"
    },

    
    buttonAzul:{
        width: "80%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.azul,
        borderRadius: 15,
        elevation: 3
    },

    titleBtAzul:{
        fontSize: 18,
        fontStyle:"normal",
        color:"#FFF",
        fontWeight: "bold"
    },
})