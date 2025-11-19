import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ArrowProps = TouchableOpacityProps & {
  backgroundColor?: string;
};

export function Arrow({ backgroundColor = "", ...props }: ArrowProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[style.container, { backgroundColor }]}
        onPress={() => router.back()}>
      <Ionicons name="arrow-back" style={style.title} />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        padding: 20,
        alignItems:"center",
        borderRadius: 10,
    },

    title:{
        textAlign:"center",
        color:"#FFF", 
        width:70,
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center",
    }
})