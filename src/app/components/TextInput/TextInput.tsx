import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input (props: TextInputProps){
    return(
        <TextInput style={style.input} {...props}/>
    );
}

const style = StyleSheet.create({
    input:{
        width: "100%",
        height: 30,
        borderBottomColor: "#AAA",
        borderBottomWidth: 1,
        textAlign:'left',
        padding: 5,
        fontSize:18,
    }
})