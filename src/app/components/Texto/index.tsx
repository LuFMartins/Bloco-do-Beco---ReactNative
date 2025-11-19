import { StyleSheet, Text, View } from "react-native";

export function TextoAlerta (){
    return(
        <View style={style.container}>
            <Text style={style.title}>Ainda não possui conteúdo!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        height:"80%",
        textAlign:'left',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },

    title:{
        width: "100%",
        textAlign: "center",
        fontSize:18
    }
})