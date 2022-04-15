export type ImgMarkerProps = {
    center: {
        lat: number, 
        lng: number
    }, 
    url: string, 
    scale: {
        width: number,
        height: number
    },
    mapZoom: number
}