import { theme } from "@/src/app/theme/theme";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function Link(props:TouchableOpacityProps){
    return(
        <TouchableOpacity  {...props} style={style.container}>
            <Text style={style.title}>VOLTAR</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        width: "100%", 
        paddingBottom: 10, 
        alignItems:"center",
        
    },

    title:{
        textAlign:"center",
        color:theme.colors.azul, 
        width:"100%",
        fontSize: theme.fonts.p,
        alignItems:"center",
        justifyContent:"center",
    }
})