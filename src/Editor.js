import React from 'react'
import Board from './components/Board'
import ActionBar from './components/ActionBar'

export default () => {

  const [layers, setLayers] = React.useState([])
  const [activeLayer, setActiveLayer] = React.useState({})
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 960 }}>
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
    </div>
  )
}