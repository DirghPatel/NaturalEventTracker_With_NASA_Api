import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import Marker from './Marker';
import IceMarker from './iceMarker'

const GoogleMap = ({ data , location , zoom  }) => {

    const NATURAL_EVENT_WILDFIRE = 8;
    const NATURAL_EVENT_GLACIER = 15;
    const locationMarkers = data.map((ev) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <Marker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        if(ev.categories[0].id === NATURAL_EVENT_GLACIER) {
            return <IceMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })

    return (
        <FullscreenMap>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyAz2rsqsg3uIxob0imo38Mrzu0FhfexLh0' }}
                defaultCenter={location}
                defaultZoom={zoom}
            >
                { locationMarkers }
            </GoogleMapReact>
        </FullscreenMap>
    )
}
GoogleMap.defaultProps = {
    location: {
        lat: 20.5937,
        lng: 78.9629
    },
    zoom: 4
}

export default GoogleMap

const FullscreenMap = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`