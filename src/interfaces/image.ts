export interface IImage{
    assets: [
        {
            assetId: string, 
            base64: string, 
            duration: string, 
            exif: string,
            fileName: string, 
            filesize: number,
            height: number,
            mimeType: string, 
            rotation: number, 
            type: string,
            uri: string, 
            width: number
        }
    ], 
    canceled: boolean
}
