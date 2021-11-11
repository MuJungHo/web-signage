import React from 'react'
import {
  Button,
} from '@material-ui/core'
import Player from './Player'
export default ({ layers, board }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  return (
    <div style={{
      height: 80,
      backgroundColor: '#f1f3f7',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px'
    }}>
      <h1>Web Player</h1>
      <div style={{ flex: 1 }}></div>
      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>Play</Button>
      <Player isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} layers={layers} board={board}/>
    </div>
  )
}