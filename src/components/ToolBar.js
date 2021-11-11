import React from 'react'
import { Button } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import TheatersIcon from '@material-ui/icons/Theaters';
export default props => {
  const { addLayer } = props
  const buttonStyle = {
    padding: 5,
    padding: 5,
    marginTop: 20,
    backgroundColor: 'white'
  };
  const iconStyle = {
    height: 52,
    width: 52
  };
  return (
    <div style={{
      width: 104,
      height: 'calc(100vh - 80px)',
      backgroundColor: '#f1f3f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Button variant="outlined" color="primary" onClick={() => addLayer('image')} style={{ ...buttonStyle }}><ImageIcon style={{ ...iconStyle }} /></Button>
      <Button variant="outlined" color="primary" onClick={() => addLayer('video')} style={{ ...buttonStyle }}><TheatersIcon style={{ ...iconStyle }} /></Button>
    </div>
  )
}