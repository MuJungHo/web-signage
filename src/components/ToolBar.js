import React from 'react'
import { IconButton } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import TheatersIcon from '@material-ui/icons/Theaters';
export default props => {
  const { addLayer } = props
  return (
    <div style={{
      width: 120,
      height: 'calc(100vh - 80px)',
      backgroundColor: '#f1f3f7'
    }}>
      <IconButton color="primary" component="span"
        onClick={() => addLayer('image')}>
        <ImageIcon />
      </IconButton>
      <IconButton color="primary" component="span"
        onClick={() => addLayer('video')}>
        <TheatersIcon />
      </IconButton>
    </div>
  )
}