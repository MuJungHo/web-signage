import React from 'react'
import Board from '../components/editor/Board'
import ActionBar from '../components/editor/ActionBar'
export default () => {
  const [layers, setLayers] = React.useState([])
  return (
    <div style={{ width: 960, margin: 'auto', marginTop: 50 }}>
      <ActionBar layers={layers} setLayers={setLayers} />
      <Board layers={layers} setLayers={setLayers} />
    </div>
  )
}