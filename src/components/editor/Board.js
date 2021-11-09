import React from 'react'
import Layer from './Layer'
export default ({ layers, setLayers }) => {
  const board = React.useRef()
  const [activeLayer, setActiveLayer] = React.useState({})
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="960" height="540" ref={board} style={{ marginTop: 20 }} >
      <rect width="960" height="540" x="0" y="0" fill="#f5f5f5"></rect>
      {
        layers
          .map(layer =>
            <Layer
              activeLayer={activeLayer}
              setActiveLayer={setActiveLayer}
              key={layer.id}
              layer={layer}
              layers={layers}
              setLayers={setLayers}
              board={board}
            />)
      }
    </svg>
  )
}