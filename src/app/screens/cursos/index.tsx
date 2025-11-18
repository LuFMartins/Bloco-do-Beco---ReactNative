import { StatusBar } from "expo-status-bar"
import { ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../components/Header"
import { theme } from "../../theme/theme"

export default function Cursos(){
    return(
        <ImageBackground style={{flex:1}} source={require("../../../../assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            <SafeAreaView>
                <Header backgroundColor={theme.colors.rosa}/>
            </SafeAreaView>
        </ImageBackground>
    )
}