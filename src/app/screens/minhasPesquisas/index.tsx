import { Header } from "@/src/app/components/Header"
import { theme } from "@/src/app/theme/theme"
import { StatusBar } from "expo-status-bar"
import { ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function MinhasPesquisas(){
    return(
        <ImageBackground style={{flex:1}} source={require("@/assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            <SafeAreaView>
                <Header backgroundColor={theme.colors.amarelo}/>
            </SafeAreaView>
        </ImageBackground>
    )
}