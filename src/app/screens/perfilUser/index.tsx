import { AuthContext } from "@/src/firebase/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonBranco } from "../../components/Button/ButtonBranco/ButtonBranco";
import { Arrow } from "../../components/Button/ButtonVoltar/Arrow";
import { theme } from "../../theme/theme";
import { style } from "./style";


export default function Perfil(){
    const { usuario } = useContext(AuthContext);
    
    return(
        <ImageBackground source={require("@/assets/images/PlanoDeFundoL.png")} style={{flex:1}}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView
                    contentContainerStyle={{paddingBottom: 100}}
                >
                <View style={style.btVoltar}>
                    <Arrow backgroundColor="rgba(255,255,255,0.7)" color="black"/>
                </View>
                <View style={style.container}>
                    <Image style={style.img} source={require("@/assets/images/icon.png")}/>
                    <Text style={style.titleName}>{usuario?.nome}</Text>

                        <View style={style.whiteBox}>
                        
                        
                            <View style={style.info}>
                                <Ionicons name="mail" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >{usuario?.email}</Text>
                            </View>
                        
                            <View style={style.info}>
                                <Ionicons name="phone-portrait" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >Número: {usuario?.telefone}</Text>
                            </View>
                        
                            <View style={style.info}>
                                <Ionicons name="document-text" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >CPF: {usuario?.cpf}</Text>
                            </View>
                        
                            <View style={style.info}>
                                <Ionicons name="map" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >CEP: {usuario?.cep}</Text>
                            </View>
                        
                            <View style={style.info}>
                                <Ionicons name="map-outline" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >{usuario?.estadoNascimento}</Text>
                            </View>
                        
                            <View style={style.info}>
                                <Ionicons name="male-female" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >{usuario?.genero}</Text>
                            </View>
                        
                            <View style={style.info}>
                                <Ionicons name="people-circle-outline" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >{usuario?.identificacao_racial}</Text>
                            </View>
                            
                            <View style={style.info}>
                                <Ionicons name="add" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >{usuario?.religiao}</Text>
                            </View>
                            
                            <View style={[style.info, {borderBottomWidth:0}]}>
                                <Ionicons name="calendar" color={theme.colors.marrom} size={30}/>
                                <Text style={style.titleInfo} >{usuario?.dataNascimento}</Text>
                            </View>
                        
                        </View>

                    <ButtonBranco title="Editar Meus Dados" activeOpacity={0.8}/>
                    </View> 
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}