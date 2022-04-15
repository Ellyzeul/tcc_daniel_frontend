import { Marker } from "@react-google-maps/api"
import { ImgMarkerProps } from "./types"

export const ImgMarker = (props: ImgMarkerProps) => {
    const { center, url, scale, mapZoom } = props

    const scaling = 118199.2460 * Math.pow(mapZoom, -5.6547)
    console.log(scaling)

    const width = scale.width / scaling
    const height = scale.height / scaling
    return (
        <Marker
            position={center}
            icon={{
                url: url,
                scaledSize: new google.maps.Size(width, height)
            }}
        />
    )
}
