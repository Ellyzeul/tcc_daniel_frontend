import { GoogleMap, Marker, MarkerClusterer, Polygon, PolygonProps, useJsApiLoader } from '@react-google-maps/api';
import { ImgMarker } from '../ImgMarker/ImgMarker';
import './Map.css'


export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "API_KEY"
    }
  )
  const center = {
    lat: -22.920347,
    lng: -51.907094
  }
  const mapStyle = {
    height: '100%', 
    width: '100%'
  }
  const zoom = 15

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
            <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={zoom}>
              <ImgMarker center={center} url={markerURL} scale={markerScale} />
            </GoogleMap>
          )
        : <></>
      }
    </div>
  )
}
