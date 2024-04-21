import { Alert, StyleSheet, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { OutlinedButton } from '../ui/OutlinedButton'
import { Colors } from '../../constants/colors'
import * as PermissionPickers from 'expo-location'
import { ILoc, ILocation } from '../../interfaces/location'
import { getMapPreview } from '../../ui/location'

export default function LocationPicker() {
    const [pickedLocation, setPickedLocation] = useState<ILoc>({lat: 0, lng: 0})

    const [ locationPermissionInformation, requestPermission ] = PermissionPickers.useForegroundPermissions()
  
    const verifyPermissions = async() => {
        if (locationPermissionInformation?.status === PermissionPickers.PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()

            return permissionResponse.granted
        }
        if (locationPermissionInformation?.status === PermissionPickers.PermissionStatus.DENIED){
            Alert.alert('Insufficent permissions!', 'You need to grant location permissions to use this app')
            return false
        }
        return true
    }

  const getLocationHandler = async() => {
    const hasPermission = await verifyPermissions()
    if(!hasPermission) return

    const location = await PermissionPickers.getCurrentPositionAsync() as ILocation
    setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
    })
  }

  const pickOnMapHandler = () => {}

  let locationPreview = <Image
    style={styles.image}
    source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}
    />

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        //borderRadius: 4
    }
})