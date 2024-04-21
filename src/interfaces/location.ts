export interface ILocation {
    coords: {
        accuracy: number,
        altitude: number,
        altitudeAccuracy: number,
        heading: number,
        latitude: number,
        longitude: number,
        speed: number
    },
    mocked: boolean,
    timestamp: number
}

export interface ILoc{
    lat: number,
    lng: number
}
