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
    lat: -22.120347,
    lng: -51.407094
  }
  const mapStyle = {
    height: '100%', 
    width: '100%'
  }
  const zoom = 15
  
  return (
    <div className="map">
      {
        isLoaded
        ? (
            <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={zoom}>
              <Marker position={center} icon={{
                  url: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg',
                  scaledSize: new google.maps.Size(154, 88.25)
                }}  />
            </GoogleMap>
          )
        : <></>
      }
    </div>
  )
}
