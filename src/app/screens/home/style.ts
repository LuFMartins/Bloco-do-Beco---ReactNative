import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const style = StyleSheet.create({
    cobertura:{
        width:"100%", 
        resizeMode:"cover",
        maxHeight:"28%", 
        borderBottomLeftRadius:20, 
        borderBottomRightRadius:20,
        margin:0,
        elevation:2
    },

    grade:{
        flex:1,
        flexDirection:"column",  
        justifyContent:"center", 
        alignItems:"center", 
        alignContent:"center",
        gap:30,
    },

    img:{
        width:"18%", 
        height:"100%",
        resizeMode:"center", 
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
    },

    button:{
        flexDirection:"row",
        width:"80%",
        height:"18%",
        backgroundColor:"white",
        padding:15,
        borderRadius: 15,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        elevation:1
    },

    title:{
        textAlign:"left",
        width:"80%",
        fontSize:theme.fonts.p2,
        paddingHorizontal: 30,
        fontFamily:"Slackey"
    },

    gradeButtons:{
        flex:1,
        alignItems:"center",
        justifyContent:"center", 
        alignContent:"center",
    }
})