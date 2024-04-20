import { Pressable, StyleSheet, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constants/colors";

type Props = {
    onPress: () => void,
    icon: any,
    children: React.ReactNode
}

export const OutlinedButton = ({ onPress, icon, children }:Props) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <Ionicons style={styles.icon} name={icon} color={Colors.primary500} size={18}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: Colors.primary500
    }
})