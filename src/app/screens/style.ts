import { theme } from "@/src/app/theme/theme"
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:'center',
        gap: 55,
        width:"100%"
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: "90%",
        height: "80%",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
        justifyContent: "space-around"
    },

    buttonAzul:{
        width: "60%",
        height: "8%",
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

    buttonBranco:{
        width: "65%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 15,
        elevation: 3
    },

    titleBtBranco:{
        fontSize: 20,
        fontStyle:"normal",
        color: "#000",
        fontWeight: "bold"
    }

})