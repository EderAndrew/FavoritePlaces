import { Alert, Button, View, Image, Text, StyleSheet } from "react-native"
import * as ImagePickerS from 'expo-image-picker'
import { useState } from "react"
import { IImage } from "../../interfaces/image"
import { Colors } from "../../constants/colors"
import { OutlinedButton } from "../ui/OutlinedButton"

export const ImagePicker = () => {
    const [cameraPermissionInfo, requestPermission] = ImagePickerS.useCameraPermissions()
    const [pickedImage, setPickedImage] = useState('')

    //Permission for IOS
    const verifyPermissions = async () => {
        if (cameraPermissionInfo?.status === ImagePickerS.PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()

            return permissionResponse.granted
        }
        if (cameraPermissionInfo?.status === ImagePickerS.PermissionStatus.DENIED){
            Alert.alert('Insufficent permissions!', 'You need to grant camera permissions to use this app')
            return false
        }
        return true
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions()

        if(!hasPermission){
            return
        }

       const image = await ImagePickerS.launchCameraAsync({
           mediaTypes: ImagePickerS.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [16, 9],
           quality: 0.5
       }) as unknown as IImage

       setPickedImage(image.assets[0].uri)
       
    }

    let imagePreview = <Text style={styles.fallbackText}>No Image taken yet</Text>

    if(pickedImage){
        imagePreview = <Image source={{ uri: pickedImage }} style={styles.image}/>
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton
                icon='camera'
                onPress={takeImageHandler}
                children='Take Image'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fallbackText: {
        color: Colors.primary400,
        fontSize: 16,
        textAlign: 'center'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    }
})