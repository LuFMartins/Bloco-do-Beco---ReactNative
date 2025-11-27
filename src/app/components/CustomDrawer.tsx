import { AuthContext } from "@/src/firebase/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme/theme";

export default function CustomDrawer(props:any) {
  const { logout, usuario } = useContext(AuthContext);
  const [mostrarModal, setMostrarModal] = useState(false)

  function handleLogout() {
    setMostrarModal(false)
    logout();
    router.replace("/screens/inicial");
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{
        flex: 1
    }}>
      {/* topo */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: theme.fonts.h2, fontWeight: "bold" }}>
          Olá, {usuario?.nome ?? "Usuário"}
        </Text>
        <Text style={{ fontSize: theme.fonts.p, fontWeight: "bold" }}>
          {usuario?.email ?? "Email"}
        </Text>
      </View>

      {/* opções normais do Drawer */}
      <DrawerItemList {...props} />

      {/* botão de logout */}
      <View style={{ marginTop: "auto", padding: 20, alignItems:"center", width:"100%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            width:"100%",
          }}
          onPress={() => setMostrarModal(true)}
        >
          <Ionicons name="log-out-outline" size={22} color="#d00" />
          <Text style={{ fontSize: 16, marginLeft: 10, color: "#d00", width:"100%"}}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>


        <Modal visible={mostrarModal} transparent animationType="fade">
          <View style={style.bg}>
              <View style={style.whiteBox}>
                    <Text style={{width:"100%", textAlign:"center", fontSize:theme.fonts.h2}}>Você quer encerrar sessão?</Text>

                    <View style={style.buttonGroup}>
                        <TouchableOpacity style={[style.button, {backgroundColor:"#d00"}]}
                        onPress={handleLogout}>
                            <Text style={style.title}>Sair</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.button, {backgroundColor:theme.colors.azul}]} onPress={() => setMostrarModal(false)}>
                            <Text style={style.title}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
              </View>
          </View>
        </Modal>

    </DrawerContentScrollView>
  );  
}

const style = StyleSheet.create({
    bg:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.3)"
    },

    whiteBox:{
        width:"80%",
        height:"30%",
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderRadius:30,
        flexDirection:"column",
        gap:30,
        elevation:5
    },

    buttonGroup:{
        flexDirection:"row",
        gap: 50,
        width:"100%",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },

    button:{
        width: "30%",
        padding:10,
        borderRadius: 10,
        elevation:3
    },

    title:{
        width:"100%", 
        textAlign:"center", 
        fontSize:theme.fonts.h2,
        fontWeight:"bold",
        color:"white"  
    }
})
