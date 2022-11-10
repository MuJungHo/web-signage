import React from 'react'
import Board from './components/Board'
import ActionBar from './components/ActionBar'
import ToolBar from './components/ToolBar'
import ControlPanel from './components/ControlPanel'
import Header from './components/Header'
import moment from 'moment'
const style = { margin: 'auto', display: 'flex', alignItems: 'center', width: '100%' }
export default () => {
  const dropRef = React.useRef()
  const [layers, setLayers] = React.useState([])
  const [type, setType] = React.useState('')
  const [isGrabing, setGrabing] = React.useState(false)
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
  const handleDrop = e => {
    e.preventDefault()
    if (isGrabing) {
      const id = moment().unix()
      setLayers([
        ...layers,
        {
          id,
          width: 100,
          height: 100,
          top: greaterThanZero(e.clientY - dropRef.current.offsetTop - 80 - 50),
          left: greaterThanZero(e.clientX - dropRef.current.offsetLeft - 50),
          data: {
            type,
            id: 0,
            value: ''
          }
        }])
      setActiveLayerID(id)
      setGrabing(false)
    }
  }
  const handleDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  }
  const handleMouseDown = type => {
    setType(type)
    setGrabing(true)
  }
  const greaterThanZero = num => num < 0 ? 0 : num
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.13)'
    }}>
      <Header
        layers={layers}
        setLayers={setLayers}
        board={board}
        setBoard={setBoard}
      />
      <div
        style={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ToolBar handleMouseDown={handleMouseDown} />
        <div
          style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
          <ActionBar
            layers={layers}
            setLayers={setLayers}
            activeLayerID={activeLayerID}
            setActiveLayerID={setActiveLayerID}
          />
          <div
            ref={dropRef}
            droppable='true'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={style}
          >
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