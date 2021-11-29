import React from 'react'
import {
  Button,
} from '@material-ui/core'
import Player from './Player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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
      <h1>Content Editor</h1>
      <a href="https://github.com/MuJungHo/web-signage" style={{ marginLeft: 20 }}>
        <img src="./assets/github.png" style={{ width: 21, height: 21, borderRadius: '50%' }} />
      </a>
      <div style={{ flex: 1 }}></div>
      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}><PlayArrowIcon />Play</Button>
      <Player isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} layers={layers} board={board} />
    </div>
  )
}