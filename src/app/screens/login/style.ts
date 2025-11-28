import { theme } from "@/src/app/theme/theme"
import { Dimensions, StyleSheet } from "react-native"

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:"center",
        alignContent:"center"
    },

    blueCard:{
        backgroundColor: theme.colors.azul,
        width: "90%",
        borderRadius: 30,
        elevation: 5,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"flex-start",
        paddingBottom: 30
    },

    whiteCard:{
        width:"90%",
        backgroundColor: "#FFF",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 15,
        elevation: 3,
        paddingHorizontal: "10%",
        paddingVertical:"10%",
        gap:30,
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
    },

    scroll:{
        flexGrow: 1,
        width:Dimensions.get('window').width,
        alignItems:"center"
    },

    bg:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
        paddingVertical: 120,
    },

    whiteBox:{
        width:"80%",
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderRadius:30,
        flexDirection:"column",
        gap:20,
        elevation:50,
        padding: 30
    },

    buttonGroup:{
        flexDirection:"row",
        gap: 50,
        width:"100%",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        marginTop:25
    },

    button:{
        width: "40%",
        padding:10,
        borderRadius: 10,
        elevation:3
    },

    title:{
        width:"100%", 
        textAlign:"center", 
        fontSize:theme.fonts.h2,
        fontWeight:"bold",
        color:"white"  
    }
})