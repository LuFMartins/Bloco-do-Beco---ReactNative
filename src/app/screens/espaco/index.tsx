import { Header } from "@/src/app/components/Header"
import { TextoAlerta } from "@/src/app/components/Texto"
import { theme } from "@/src/app/theme/theme"
import { StatusBar } from "expo-status-bar"
import { ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TitleScreens } from "../../components/TitleScreens"

export default function Espaco(){
    return(
        <ImageBackground style={{flex:1}} source={require("@/assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            <SafeAreaView style={{flex:1}}>
                <Header backgroundColor={theme.colors.marrom}/>
                <TitleScreens title="Solicitação de Espaço" backgroundColor={theme.colors.marrom} color={theme.colors.marrom} />
                <TextoAlerta/>
            </SafeAreaView>
        </ImageBackground>
    )
}