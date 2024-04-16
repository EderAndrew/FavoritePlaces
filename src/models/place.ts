class Place {
    id: string
    title: string
    imageUri: string
    address: string
    location: object

    constructor(title: string, imageUri: string, address: string, location: { lat: string, lng: string }) {
        this.id = new Date().toString() + Math.random().toString()
        this.title = title
        this.imageUri = imageUri
        this.address = address
        this.location = location
    }
}