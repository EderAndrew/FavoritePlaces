import { Pressable, StyleSheet } from "react-native"
import  { Ionicons } from '@expo/vector-icons';

type Props = {
    icon: any,
    size?: number,
    color?: string
    onPress?: () => void
}

export const IconButton = ({icon, size, color, onPress}:Props) => {
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    )
}

const styles =  StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    }
})