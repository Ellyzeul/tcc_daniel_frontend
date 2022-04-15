import { Marker } from "@react-google-maps/api"
import { ImgMarkerProps } from "./types"

export const ImgMarker = (props: ImgMarkerProps) => {
    const { center, url, scale } = props
    const width = scale.width / 4
    const height = scale.height / 4

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
