import { FlatList, Text } from "react-native"
import { IPlace } from "../../interfaces/place"
import React from "react"

type Props = {
    places: IPlace[]
}
export const PlacesList = ({places}:Props) => {
    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Text>{item.title}</Text>}
        />
    )
}