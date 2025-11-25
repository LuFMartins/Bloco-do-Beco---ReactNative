import { Ionicons } from '@expo/vector-icons'
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../components/Header"
import { theme } from "../../theme/theme"
import { style } from "./style"
//import { useContext } from 'react'
//import {AuthContext} from "../../../firebase/contexts/AuthContext"

export default function Home(){

    return(
        <ImageBackground style={{flex:1}} source={require("../../../../assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            <SafeAreaView style={{flex:1, width:"100%"}}>
                <Header backgroundColor={theme.colors.azul}/>
                    <View>
                        <Image source={require("@/assets/images/BdB.webp")} resizeMode="contain" style={style.cobertura}/>

                        <View style={{alignItems:"center"}}>
                            <View style={style.search}>
                                <TextInput placeholder="Pesquisar" style={{width:"85%"}} />
                                <Ionicons name="search" size={18} />
                            </View>

                            <View style={style.grade}>
                                <TouchableOpacity activeOpacity={0.8} onPress={()=>router.push("/screens/eventos")}>
                                    <Image source={require("@/assets/images/eventos.png")} resizeMode="cover" style={style.button}/>
                                    <Text style={style.title}>Eventos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/screens/cursos")}>
                                    <Image source={require("@/assets/images/cursos.png")} resizeMode="cover" style={style.button}/>
                                    <Text style={style.title}>Cursos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/screens/meusCursos")}>
                                    <Image source={require("@/assets/images/meusCursos.png")} resizeMode="cover" style={style.button}/>
                                    <Text style={style.title}>Meus Cursos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8}onPress={() => router.push("/screens/espaco")}>
                                    <Image source={require("@/assets/images/espaço.png")} resizeMode="cover" style={style.button}/>
                                    <Text style={style.title}>Solicitação de Espaço</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
            </SafeAreaView>
        </ImageBackground>
    )
}