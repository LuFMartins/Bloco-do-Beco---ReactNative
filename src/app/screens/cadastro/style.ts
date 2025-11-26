import { theme } from "@/src/app/theme/theme"
import { Dimensions, StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:'center',
        alignContent:"center"
    },

    container_02:{
        flex:1
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: "90%",
        height:"97%",
        paddingBottom:0,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
        justifyContent: "space-around",
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
        marginBottom:70
    },

    safe:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
    },

    scroll:{
        flexGrow: 1,
        width:Dimensions.get('window').width,
        alignItems:"center",
    },

    buttonAzul:{
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.azul,
        borderRadius: 15,
        elevation: 3
    },

    titleBtAzul:{
        fontSize: theme.fonts.h2,
        fontStyle:"normal",
        color:"#FFF",
        fontWeight: "bold"
    }
})