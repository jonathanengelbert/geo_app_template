import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


const mapView = (props) => {

    return (
      <LeafletMap
        center={[40.7831, -73.9712]}
        zoom={13}
        maxZoom={23}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scroll={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}

        >

        <TileLayer
          url='http://tile.stamen.com/toner/{z}/{x}/{y}.png'
        />
        <Marker position={props.position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>

      </LeafletMap>
    );
  }


export default mapView
