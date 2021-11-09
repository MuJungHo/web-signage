import React from 'react'
import { IconButton, Paper } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import TheatersIcon from '@material-ui/icons/Theaters';
import moment from 'moment'
export default ({ layers, setLayers }) => {

  return (
    <Paper>
      <IconButton color="primary" component="span"
        onClick={() => setLayers([
          ...layers,
          {
            id: moment().unix(),
            width: 100,
            height: 100,
            top: 0,
            left: 0,
            data: {
              type: 'image',
              id: 0
            }
          }])}>
        <ImageIcon />
      </IconButton>
      <IconButton color="primary" component="span"
        onClick={() => setLayers([
          ...layers,
          {
            id: moment().unix(),
            width: 100,
            height: 100,
            top: 0,
            left: 0,
            data: {
              type: 'video',
              id: 0
            }
          }])}>
        <TheatersIcon />
      </IconButton>
    </Paper>
  )
}