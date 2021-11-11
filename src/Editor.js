import React from 'react'
import Board from './components/Board'
import ActionBar from './components/ActionBar'
import ToolBar from './components/ToolBar'
import ControlPanel from './components/ControlPanel'
import Header from './components/Header'
import moment from 'moment'

export default () => {
  const [layers, setLayers] = React.useState([])
  const [activeLayerID, setActiveLayerID] = React.useState()
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
      backgroundColor: 'rgba(74,91,117,.1)'
    }}>
      <Header />
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ToolBar addLayer={handleAddLayer} />
        <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ActionBar
            layers={layers}
            setLayers={setLayers}
            activeLayerID={activeLayerID}
            setActiveLayerID={setActiveLayerID}
          />
          <Board
            layers={layers}
            setLayers={setLayers}
            activeLayerID={activeLayerID}
            setActiveLayerID={setActiveLayerID}
          />
        </div>
        <ControlPanel
          layers={layers}
          setLayers={setLayers}
          activeLayerID={activeLayerID}
        />
      </div>
    </div>
  )
}