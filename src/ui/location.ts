export const getMapPreview = (lat:number, lng:number) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${process.env.GOOGLE_API_KEY}`

    return imagePreviewUrl
}