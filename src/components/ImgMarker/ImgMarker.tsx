import "./ImgMarker.css"
import { ImgMarkerProps } from "./types"

export const ImgMarker = (props: ImgMarkerProps) => {
    const { lat, lng, title, color } = props


    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={title}
            />
            <div className="pulse" />
        </div>
    )
}
