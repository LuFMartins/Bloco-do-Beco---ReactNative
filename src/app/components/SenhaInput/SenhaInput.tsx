import { theme } from "@/src/app/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

export function SenhaInput ({...props}: TextInputProps){

    const [mostrarSenha, setMostrarSenha] = useState(false)
    const icoOlho = <Ionicons name="eye" size={theme.fonts.h2} color="black"/>
    const icoClose = <Ionicons name="eye-off" size={theme.fonts.h2} color="black"/>

    return(
        <View style={{flexDirection: "row", width:"100%", justifyContent:"space-between", alignItems:"center"}}>
            <TextInput {...props} placeholder="Senha" secureTextEntry={!mostrarSenha} 
            style={{
                borderBottomWidth:1,
                borderBottomColor:"#AAA",
                width:"90%",
            }}
            />
            
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={{padding:10}}>
                <Text style={{fontSize:theme.fonts.p}}>{mostrarSenha? icoClose : icoOlho}</Text>
            </TouchableOpacity>
            
        </View>
    );
}