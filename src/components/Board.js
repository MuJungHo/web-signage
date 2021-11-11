import React from 'react'
import Layer from './Layer'
export default ({ layers, setLayers, activeLayerID, setActiveLayerID }) => {
  const board = React.useRef()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={window.innerWidth / 2} height={window.innerHeight / 2}
      ref={board}
      style={{ marginTop: 20 }}
    >
      <rect
        width={window.innerWidth / 2}
        height={window.innerHeight / 2} x="0" y="0" fill="#f5f5f5"
        onClick={() => setActiveLayerID()} />
      {
        layers
          .map(layer =>
            <Layer
              activeLayerID={activeLayerID}
              setActiveLayerID={setActiveLayerID}
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