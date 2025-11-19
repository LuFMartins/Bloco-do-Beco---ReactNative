import { StatusBar } from "expo-status-bar"
import { ImageBackground, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Arrow } from "../../components/Button/ButtonVoltar/Arrow"
import { Header } from "../../components/Header"
import { TextoAlerta } from "../../components/Texto"
import { theme } from "../../theme/theme"

export default function Cursos(){
    return(
        <ImageBackground style={{flex:1}} source={require("../../../../assets/images/PlanoDeFundo.png")}>
            <StatusBar style="dark"/>
            <SafeAreaView>
                <Header backgroundColor={theme.colors.rosa}/>
                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center", padding: 20, backgroundColor:"#FFF", borderBottomWidth:1, borderBottomColor:theme.colors.rosa}}>
                    <Arrow backgroundColor={theme.colors.rosa} />
                    <Text style={{width: "100%", textAlign:"center", fontSize:30, color:theme.colors.rosa}}>Cursos</Text>
                </View>
                <TextoAlerta/>
            </SafeAreaView>
        </ImageBackground>
    )
}