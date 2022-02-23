import React from 'react'
import {
  Button,
} from '@material-ui/core'
import Player from './Player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SystemUpdateAlt from '@material-ui/icons/SystemUpdateAlt';
import moment from 'moment'
export default ({ layers, board }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const exportJsonFile = () => {
    let dataStr = JSON.stringify(layers);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `data_${moment().unix()}.json`);
    linkElement.click();
  }
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
      <Button style={{ marginRight: 20 }} variant="contained" color="primary" onClick={exportJsonFile}><SystemUpdateAlt style={{ marginRight: 10 }} />Export</Button>
      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}><PlayArrowIcon style={{ marginRight: 10 }}/>Play</Button>
      <Player isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} layers={layers} board={board} />
    </div>
  )
}