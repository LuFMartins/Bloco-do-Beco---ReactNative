import { theme } from "@/src/app/theme/theme"
import { AuthContext } from "@/src/firebase/contexts/AuthContext"
import { logout } from "@/src/firebase/services/authentication"
import { Ionicons } from "@expo/vector-icons"
import { DrawerActions } from "@react-navigation/native"
import { router, useNavigation } from "expo-router"
import { useContext } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function Header({backgroundColor = ""}){ // adicionar parametro que puxa nome do usuario
    const { usuario } = useContext(AuthContext);
    const navigation = useNavigation();

    function EncerrarSessao(){
        logout()
        router.replace("/screens/inicial")
    }
    return(
        <View style={[style.header, {backgroundColor}]}>
            
            {/* Logo bloco do beco */}
            <TouchableOpacity activeOpacity={0.8} style={style.logoBt}>
                <Image style={style.logoImg} source={require("@/assets/images/LogoBdB2.png")}/>
            </TouchableOpacity>
            
            {/* perfil do usuario */}
            <TouchableOpacity activeOpacity={0.9} style={{width:"20%"}}>
                <View style={style.user}>
                    <Image style={[style.userImg, {backgroundColor:"black", borderRadius:50}]} source={require("@/assets/images/icon.png")}/>
                    <Text style={style.title} numberOfLines={1}>{usuario?.nome}</Text>
                </View>
            </TouchableOpacity>
            
            {/* notificação e menu */}
            <View style={style.nav}>
                <TouchableOpacity>
                    <Ionicons name="notifications" size={20} color={"#FFF"}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
                    <Ionicons name="menu" size={25} color={"#FFF"}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width: "100%",
        height:"12%",
        flexDirection: "row",
        alignContent:"center",
        alignItems: "center",
        borderBottomWidth:1,
        borderColor: theme.colors.cinza,
        justifyContent:"space-around"

    },

    user:{
        flexDirection: "row",
        gap:8,
        width: "100%",
        height:"100%",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
    },

    title:{
        color: "#FFF",
        fontSize:12,
        width:"100%",
        textAlign:"left"
    },

    nav:{
        flexDirection:"row",
        gap: 20,
        width:"20%",
        alignItems:"center",
        alignContent:"center",
        justifyContent: "center"
    },

    logoImg:{
        height:"100%",
        width:"70%",
        resizeMode:"contain",
    },

    userImg:{
        width:"50%",
        height:"42%",
        resizeMode:"cover"
    },

    logoBt:{
        width: "20%",
        height: "80%"
    },
})