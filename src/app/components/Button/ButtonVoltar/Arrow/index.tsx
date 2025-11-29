import { theme } from "@/src/app/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ArrowProps = TouchableOpacityProps & {
  backgroundColor?: string;
  color?: string
};

export function Arrow({ backgroundColor = "", color="", ...props }: ArrowProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[style.container, {backgroundColor}]}
        onPress={() => router.back()}>
      <Ionicons name="arrow-back" style={[style.arrow, {color}]} />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        width: "18%",
        height: "50%",
        padding: 10,
        borderRadius: 10,
        justifyContent:"center"
    },

    arrow:{
        textAlign:"center",
        color:"#FFF", 
        width:"100%",
        fontSize: theme.fonts.h2,
    }
})