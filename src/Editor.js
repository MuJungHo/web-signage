import React from 'react'
import Board from './components/Board'
import ActionBar from './components/ActionBar'
import ToolBar from './components/ToolBar'
import ControlPanel from './components/ControlPanel'
import moment from 'moment'

export default () => {
  const [layers, setLayers] = React.useState([])
  const [activeLayer, setActiveLayer] = React.useState({})
  const handleAddLayer = type => {
    setLayers([
      ...layers,
      {
        id: moment().unix(),
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        data: {
          type,
          id: 0
        }
      }])
  }
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(74,91,117,.1)'
    }}>
      <ToolBar addLayer={handleAddLayer}/>
      <div style={{ width: 1000, padding: 20 }}>
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
      <ControlPanel />
    </div>
  )
}