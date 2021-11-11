import React from 'react'
import Layer from './Layer'
export default ({ layers, setLayers, activeLayerID, setActiveLayerID, board }) => {
  const boardRef = React.useRef()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={board.width} height={board.height}
      ref={boardRef}
      style={{ marginTop: 20 }}
    >
      <rect
        width={board.width}
        height={board.height} x="0" y="0" fill={board.backgroundColor}
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
              board={boardRef}
            />)
      }
    </svg>
  )
}