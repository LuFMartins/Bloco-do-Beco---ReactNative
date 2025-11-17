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
        width: 70, 
        padding: 20, 
        alignItems:"center",
    },

    title:{
        textAlign:"center",
        color:theme.colors.azul, 
        width:70,
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center",
    }
})