import { TouchableOpacity, Text, TouchableOpacityProps} from "react-native";
import { style } from "./style";

type ButtonProps = TouchableOpacityProps & {
    title: string;
}

export function ButtonAzul({title, ...Rest }:ButtonProps){
    return(
        <TouchableOpacity style={style.button} {...Rest}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}
