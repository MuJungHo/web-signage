import React from 'react'
import Layer from './Layer'
export default ({ layers, setLayers, activeLayerID, setActiveLayerID, board }) => {
  const boardRef = React.useRef()
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={board.width}
      height={board.height}
      ref={boardRef}
      // stroke="#f5f5f5"
      style={{ marginTop: 20 }}
    >
      {
        board.background.type === 'color'
          ?
          <rect
            width={board.width}
            height={board.height} x="0" y="0" fill={board.background.color}
            onClick={() => setActiveLayerID()}
          />
          :
          board.background.imageId === 0
            ?
            <rect
              width={board.width}
              height={board.height} x="0" y="0" fill={board.background.color}
              onClick={() => setActiveLayerID()}
            />
            :
            <image
              xlinkHref={`./assets/images/${board.background.imageId}.jpg`}
              x="0"
              y="0"
              width={board.width}
              height={board.height}
              preserveAspectRatio="xMidYMid slice"
              onClick={() => setActiveLayerID()}
            />
      }
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