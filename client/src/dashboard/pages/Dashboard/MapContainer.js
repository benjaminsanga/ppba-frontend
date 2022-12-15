import React from "react"
import { Map } from "leaflet"

export default class MapContainer extends React.Component {

  updateDimensions() {
    const height = window.innerWidth >= 992 ? window.innerHeight : 400
    this.setState({ height: height })
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }


  render() {
    return (
      <div class="map-container" style={{ height: this.state.height }}>
        <Map>

        </Map>
      </div>
    )
  }
}