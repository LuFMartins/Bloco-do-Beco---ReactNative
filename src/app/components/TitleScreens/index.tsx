import { Dimensions, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme/theme";
import { Arrow } from "../Button/ButtonVoltar/Arrow";

export function TitleScreens({title, backgroundColor, color}:{title:string, backgroundColor:string, color:string}){
    return(
        <View 
            style={style.bar}>
            <Arrow backgroundColor={backgroundColor} />
            <Text style={[style.text, {color}]}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    bar:{
        width:Dimensions.get('window').width,
        height:"12%",
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems:"center", 
        borderBottomWidth:1, 
        borderBottomColor:theme.colors.roxo
    },

    text:{
        width: "60%", 
        textAlign:"center", 
        fontSize:theme.fonts.h1, 
        fontFamily:"Slackey"
    }
})