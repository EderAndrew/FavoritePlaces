import React from 'react'
import {Image, Pressable, Text, View} from 'react-native'
import { IPlace } from '../../interfaces/place'

type Props = {
    place: IPlace,
    onSelect: () => void
}
export const PlaceItem = ({place, onSelect}:Props) => {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{uri: place.imageUri}} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
        
    )
}