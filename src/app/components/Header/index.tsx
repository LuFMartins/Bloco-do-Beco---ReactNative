import { theme } from "@/src/app/theme/theme"
import { AuthContext } from "@/src/firebase/contexts/AuthContext"
import { Ionicons } from "@expo/vector-icons"
import { useContext } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function Header({backgroundColor = ""}){ // adicionar parametro que puxa nome do usuario
    const { usuario } = useContext(AuthContext);
    return(
        <View style={[style.header, {backgroundColor}]}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image style={{width: 70, height: 70}} source={require("@/assets/images/LogoBdB2.png")}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
                <View style={style.user}>
                    <Image style={{width: 45, height: 45, borderRadius:100}} source={require("@/assets/images/icon.png")}/>
                    <Text style={style.title}>{usuario?.nome}</Text>
                </View>
            </TouchableOpacity>
            <View style={style.nav}>
                <TouchableOpacity>
                    <Ionicons name="notifications" size={20} color={"#FFF"}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="menu" size={20} color={"#FFF"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width: "100%",
        height: 110,
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent:"center",
        alignItems: "center",
        gap:40,
        paddingHorizontal: 20,
        borderBottomWidth:1,
        borderColor: theme.colors.cinza
    },

    user:{
        flexDirection: "row",
        gap:10,
        justifyContent:"center",
        width: 150,
        alignContent:"center",
        alignItems:"center"
    },

    title:{
        color: "#FFF",
        fontSize:15,
        width:"100%"
    },

    nav:{
        flexDirection:"row",
        gap: 20
    }
})