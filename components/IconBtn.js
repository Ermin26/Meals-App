import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';
function IconBtn({icon, color, stared}){
    return (
        <Pressable onPress={stared} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
};


export default IconBtn;


const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7,
    }
});