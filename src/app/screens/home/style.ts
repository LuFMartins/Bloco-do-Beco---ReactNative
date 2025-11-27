import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const style = StyleSheet.create({
    cobertura:{
        width:"100%", 
        resizeMode:"cover",
        maxHeight:"30%", 
        borderBottomLeftRadius:20, 
        borderBottomRightRadius:20,
        margin:0,
        elevation:2
    },

    search:{
        backgroundColor:"#FFF",
        width:250,
        paddingHorizontal:20,
        paddingVertical: 5,
        borderRadius:10,
        elevation:1,
        borderWidth:0.3,
        marginTop:10,
        marginBottom:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },

    grade:{
        width:"100%",
        flexDirection:"column",  
        justifyContent:"center", 
        alignItems:"center", 
        alignContent:"center",
        gap:30,
    },

    img:{
        width:60, 
        height:60,
        resizeMode:"cover", 
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
    },

    button:{
        flexDirection:"row",
        width:"80%",
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
        fontSize:theme.fonts.h2,
        paddingHorizontal: 30,
        fontFamily:"Slackey"
    }
})