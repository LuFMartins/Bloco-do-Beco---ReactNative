import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const style = StyleSheet.create({
    btVoltar:{
        height:100, 
        justifyContent:"center", 
        paddingLeft:25,
    },

    container:{
        gap:40,
        alignItems:"center",
    },
    
    img:{
        width:"27%",
        height:120,
        resizeMode:"center",
        borderRadius:100
    },

    titleName:{
        width:"100%",
        textAlign:"center",
        fontFamily:"Slackey",
        color:"white",
        fontSize:theme.fonts.h2,

    },

    whiteBox:{
        width:"90%",
        padding:30,
        backgroundColor:"rgba(255,255,255,0.7)",
        borderRadius:20,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"
    },

    info:{
        flexDirection:"row",
        gap: 20,
        width:"90%",
        alignItems:"center",
        justifyContent:"flex-start",
        padding:20,
        borderBottomWidth:1,
        borderColor:"#AAA"
    },

    titleInfo:{
        fontSize:theme.fonts.p,
        fontFamily:"Slackey",
        color:"#555"
    }
})