import React from 'react'
import { FeatureGroup, LayerGroup, Circle, Popup, Rectangle, TileLayer, MapContainer } from 'react-leaflet'
// import PlateauMap from '../../assets/images/plateau-map.png'
// 9.2182, 9.5179
function HeatMap() {

  const center = [9.2182, 9.5179]
  const rectangle = [
    [9.1, 9.4],
    [9.2, 9.48],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const fillRedOptions = { fillColor: 'red' }
  const greenOptions = { color: 'green', fillColor: 'green' }
  const purpleOptions = { color: 'purple' }

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{height: '80%', width: '90%', margin: '30px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <Circle
          center={center}
          pathOptions={fillRedOptions}
          radius={200}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[9.2852, 9.50]}
            pathOptions={greenOptions}
            radius={500}
          />
        </LayerGroup>
      </LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Area of Activity</Popup>
        <Circle center={[9.3, 9.6]} radius={2000} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </MapContainer>
  )
}

export default HeatMap
