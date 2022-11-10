import React from 'react'
import {
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'
import Player from './Player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Settings from '@material-ui/icons/Settings';
import moment from 'moment'
export default ({ layers, board, setLayers, setBoard }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const exportJsonFile = () => {
    let json = {
      layers,
      board
    };
    let dataStr = JSON.stringify(json);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `content_${moment().unix()}.json`);
    linkElement.click();
  }
  const importJsonFile = () => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'file');
    inputElement.setAttribute('accept', 'application/json');
    inputElement.click();

    inputElement.onchange = function (evt) {
      let files = evt.target.files;
      let file = files[0];
      let reader = new FileReader();
      reader.onload = async (event) => {
        const jsonData = await JSON.parse(event.target.result)
        console.log(jsonData)
        setLayers([...jsonData.layers])
        setBoard({ ...jsonData.board })
        setDialogOpen(true)
      };
      reader.readAsText(file);
    }
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
      <IconButton color="primary" onClick={handleClick} >
        <Settings />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem
          onClick={importJsonFile}>
          <CloudUpload style={{ marginRight: 10 }} />
          Upload
        </MenuItem>
        <MenuItem
          onClick={exportJsonFile}>
          <CloudDownloadIcon style={{ marginRight: 10 }} />
          Download
        </MenuItem>
      </Menu>
      <IconButton color="primary" onClick={() => setDialogOpen(true)} >
        <PlayArrowIcon />
      </IconButton>
      <Player isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} layers={layers} board={board} />
    </div>
  )
}