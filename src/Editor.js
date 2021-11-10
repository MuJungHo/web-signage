import React from 'react'
import Board from './components/Board'
import ActionBar from './components/ActionBar'
export default () => {
  const [layers, setLayers] = React.useState([])
  const [activeLayer, setActiveLayer] = React.useState({})
  return (
    <div style={{ width: 960, margin: 'auto', marginTop: 50 }}>
      <ActionBar
        layers={layers}
        setLayers={setLayers}
        activeLayer={activeLayer}
        setActiveLayer={setActiveLayer}
      />
      <Board
        layers={layers}
        setLayers={setLayers}
        activeLayer={activeLayer}
        setActiveLayer={setActiveLayer}
      />
    </div>
  )
}