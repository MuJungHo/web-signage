import React from 'react'
import Board from './components/Board'
import ActionBar from './components/ActionBar'
import ToolBar from './components/ToolBar'
import ControlPanel from './components/ControlPanel'
import Header from './components/Header'
import moment from 'moment'

export default () => {
  const [layers, setLayers] = React.useState([
    // {
    //   id: 1,
    //   width: 115,
    //   height: 80,
    //   top: 20,
    //   left: 30,
    //   data: {
    //     type: 'clock',
    //     id: 0,
    //     value: 'YYYY/MM/DD hh:mm'
    //   }
    // },
    {
      id: 2,
      width: 100,
      height: 100,
      top: 80,
      left: 200,
      data: {
        type: 'time',
        id: 0,
        value: 'YYYY/MM/DD HH:mm:ss'
      }
    },
  ])
  const [activeLayerID, setActiveLayerID] = React.useState()
  const [board, setBoard] = React.useState({
    width: window.innerWidth / 1.5,
    height: window.innerHeight / 1.5,
    background: {
      type: 'color',
      color: '#f5f5f5',
      imageId: 0
    }
  })
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
          id: 0,
          value: ''
        }
      }])
  }
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(74,91,117,.1)'
    }}>
      <Header
        layers={layers}
        board={board} />
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ToolBar addLayer={handleAddLayer} />
        <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
          <ActionBar
            layers={layers}
            setLayers={setLayers}
            activeLayerID={activeLayerID}
            setActiveLayerID={setActiveLayerID}
          />
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', }}>
            <Board
              board={board}
              layers={layers}
              setLayers={setLayers}
              activeLayerID={activeLayerID}
              setActiveLayerID={setActiveLayerID}
            />
          </div>
        </div>
        <ControlPanel
          board={board}
          setBoard={setBoard}
          layers={layers}
          setLayers={setLayers}
          activeLayerID={activeLayerID}
        />
      </div>
    </div>
  )
}