import { Arrow } from "@/src/app/components/Button/ButtonVoltar/Arrow"
import { Header } from "@/src/app/components/Header"
import { TextoAlerta } from "@/src/app/components/Texto"
import { theme } from "@/src/app/theme/theme"
import { StatusBar } from "expo-status-bar"
import { ImageBackground, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function MeusCursos(){
    return(
        <ImageBackground style={{flex:1}} source={require("@/assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            <SafeAreaView>
                <Header backgroundColor={theme.colors.verde}/>
                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center", padding: 20, backgroundColor:"#FFF", borderBottomWidth:1, borderBottomColor:theme.colors.verde}}>
                    <Arrow backgroundColor={theme.colors.verde} />
                    <Text style={{width: "100%", textAlign:"center", fontSize:30, color:theme.colors.verde}}>Meus Cursos</Text>
                </View>
                <TextoAlerta/>
            </SafeAreaView>
        </ImageBackground>
    )
}