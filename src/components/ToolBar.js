import React from 'react'
import { Button } from '@material-ui/core'
import Image from '@material-ui/icons/Image';
import Theaters from '@material-ui/icons/Theaters';
import TextFields from '@material-ui/icons/TextFields';
import Clock from '@material-ui/icons/AccessTime';
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
      <Button variant="outlined" color="primary" onClick={() => addLayer('image')} style={{ ...buttonStyle }}><Image style={{ ...iconStyle }} /></Button>
      <Button variant="outlined" color="primary" onClick={() => addLayer('video')} style={{ ...buttonStyle }}><Theaters style={{ ...iconStyle }} /></Button>
      <Button variant="outlined" color="primary" onClick={() => addLayer('text')} style={{ ...buttonStyle }}><TextFields style={{ ...iconStyle }} /></Button>
      <Button variant="outlined" color="primary" onClick={() => addLayer('clock')} style={{ ...buttonStyle }}><Clock style={{ ...iconStyle }} /></Button>
    </div>
  )
}