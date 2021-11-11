import React from 'react'
import { IconButton, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import moment from 'moment'
export default ({ layers, setLayers, activeLayerID, setActiveLayerID }) => {
  const activeLayer = layers.find(layer => layer.id === activeLayerID) || {}
  return (
    <Paper style={{ width: 960 }}>
      <IconButton color="primary" component="span"
        disabled={!activeLayerID}
        style={{ float: 'right' }}
        onClick={() => {
          setLayers([...layers.filter(layer => layer.id !== activeLayerID)])
          setActiveLayerID({})
        }}>
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" component="span"
        disabled={!activeLayerID}
        style={{ float: 'right' }}
        onClick={() => {
          setLayers([...layers, { ...activeLayer, id: moment().unix(), left: activeLayer.left + 10, top: activeLayer.top + 10 }])
        }}>
        <FileCopyIcon />
      </IconButton>
    </Paper>
  )
}