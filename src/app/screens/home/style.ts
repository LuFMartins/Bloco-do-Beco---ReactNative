import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    cobertura:{
        width:"100%", 
        maxHeight:253, 
        borderBottomLeftRadius:20, 
        borderBottomRightRadius:20
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
        flexDirection:"row", 
        flexWrap:"wrap", 
        justifyContent:"center", 
        alignItems:"center", 
        alignContent:"center",
        gap:30,
    },

    button:{
        width:150, 
        height:150, 
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        elevation:2

    },

    title:{
        textAlign:"center",
        marginTop:10
    }
})