import React from 'react'
import { FeatureGroup, LayerGroup, Circle, Popup, Rectangle, TileLayer, MapContainer } from 'react-leaflet'
// import PlateauMap from '../../assets/images/plateau-map.png'

function HeatMap() {

  const center = [51.505, -0.09]
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const fillRedOptions = { fillColor: 'red' }
  const greenOptions = { color: 'green', fillColor: 'green' }
  const purpleOptions = { color: 'purple' }

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <Circle
          center={center}
          pathOptions={fillRedOptions}
          radius={100}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[51.51, -0.08]}
            pathOptions={greenOptions}
            radius={100}
          />
        </LayerGroup>
      </LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Popup in FeatureGroup</Popup>
        <Circle center={[51.51, -0.06]} radius={200} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </MapContainer>
  )
  //  <div>
  //     <MapContainer center={[9.2182, 9.5179]} zoom={13} scrollWheelZoom={false}>
  //       <TileLayer
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />
  //       <Marker position={[9.2182, 9.5179]}>
  //         <Popup>
  //           A pretty CSS3 popup. <br /> Easily customizable.
  //         </Popup>
  //       </Marker>
  //     </MapContainer>
  //   </div>
}

export default HeatMap
