import React from 'react'
import { TextField } from '@material-ui/core'
const BasicProperties = ({ activeLayer }) => {
  return (
    <>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <TextField
          label="Left"
          type="text"
          variant="outlined"
          value={activeLayer.left}
        />
        <TextField
          label="Top"
          type="text"
          variant="outlined"
          style={{ marginLeft: 20 }}
          value={activeLayer.top}
        />
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <TextField
          label="Width"
          type="text"
          variant="outlined"
          value={activeLayer.width}
        />
        <TextField
          label="Height"
          type="text"
          variant="outlined"
          style={{ marginLeft: 20 }}
          value={activeLayer.height}
        />
      </div>
    </>
  )
}
const ImageProperties = ({ activeLayer }) => {
  return (
    <div>
      <h2>Image Properties</h2>
      <BasicProperties activeLayer={activeLayer}/>
    </div>
  )
}
const VideoProperties = ({ activeLayer }) => {
  return (
    <div>
      <h2>Video Properties</h2>
      <BasicProperties activeLayer={activeLayer}/>
    </div>
  )
}
export default ({ layers, setLayers, activeLayerID }) => {
  const activeLayer = layers.find(layer => layer.id === activeLayerID) || {}
  return (
    <div style={{
      width: 380,
      height: 'calc(100vh - 80px)',
      backgroundColor: '#f1f3f7',
      padding: 20
    }}>
      {
        activeLayer.data && {
          'image': <ImageProperties activeLayer={activeLayer} />,
          'video': <VideoProperties activeLayer={activeLayer} />
        }[activeLayer.data.type]

      }

    </div>
  )
}