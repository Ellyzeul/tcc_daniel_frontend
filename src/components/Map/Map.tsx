import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useRef, useState } from 'react';
import { ImgMarker } from '../ImgMarker/ImgMarker';
import './Map.css'


export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDQUBT7vxPz8cm8kRoxe1ILhRF96awMTec"
    }
  )
  const center = {
    lat: -22.820347,
    lng: -51.987094
  }
  const mapStyle = {
    height: '100%', 
    width: '100%'
  }
  const initialZoom = 6
  const [markerZoom, setMarkerZoom] = useState(initialZoom)

  const mapRef = useRef(null)
  const zoomHandler = () => {
    if(!mapRef.current) return

    const map = mapRef.current as google.maps.Map

    if(!map.state.map) return

    const zoom = map.state.map.zoom 
    setMarkerZoom(zoom)
  }

  const markerURL = 'https://www.brasilchannel.com.br/img/mapas_municipios/sp/sp_pprudente.gif'
  const markerScale = {
    width: 519,
    height: 384
  }
  
  return (
    <div className="map">
      {
        isLoaded
        ? (
            <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={initialZoom} ref={mapRef} onZoomChanged={zoomHandler}>
              <ImgMarker center={center} url={markerURL} scale={markerScale} mapZoom={markerZoom} />
            </GoogleMap>
          )
        : <></>
      }
    </div>
  )
}
