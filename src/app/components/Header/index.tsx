import { theme } from "@/src/app/theme/theme"
import { AuthContext } from "@/src/firebase/contexts/AuthContext"
import { logout } from "@/src/firebase/services/authentication"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useContext } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function Header({backgroundColor = ""}){ // adicionar parametro que puxa nome do usuario
    const { usuario } = useContext(AuthContext);

    function EncerrarSessao(){
        logout()
        router.replace("/screens/inicial")
    }
    return(
        <View style={[style.header, {backgroundColor}]}>
            <TouchableOpacity activeOpacity={0.8} style={style.logoBt}>
                <Image style={style.logoImg} source={require("@/assets/images/LogoBdB2.png")}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={{width:"20%"}}>
                <View style={style.user}>
                    <Image style={style.userImg} source={require("@/assets/images/icon.png")}/>
                    <Text style={style.title}>{usuario?.nome}</Text>
                </View>
            </TouchableOpacity>
            <View style={style.nav}>
                <TouchableOpacity>
                    <Ionicons name="notifications" size={22} color={"#FFF"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={EncerrarSessao}>
                    <Ionicons name="menu" size={22} color={"#FFF"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width: "100%",
        height:"13%",
        flexDirection: "row",
        alignContent:"center",
        alignItems: "center",
        borderBottomWidth:1,
        borderColor: theme.colors.cinza,
        justifyContent:"space-around"

    },

    user:{
        flexDirection: "column",
        gap:10,
        justifyContent:"center",
        width: "100%",
        alignContent:"center",
        alignItems:"center",
    },

    title:{
        color: "#FFF",
        fontSize:12,
        width:"100%",
        textAlign:"center"
    },

    nav:{
        flexDirection:"row",
        gap: 15,
        width:"20%",
        alignItems:"center",
        alignContent:"center",
        justifyContent: "center"
    },

    logoImg:{
        height:"100%",
        minWidth: "100%",
        maxWidth: "100%",
    },

    userImg:{
        height:"48%",
        width: "50%",
        borderRadius: 50
    },

    logoBt:{
        width: "20%",
        height: "80%"
    },
})