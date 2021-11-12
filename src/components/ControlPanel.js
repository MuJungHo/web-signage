import React from 'react'
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core'
import MediaLibrary from './MediaLibrary'
import { media } from '../medias'
import ColorPicker from './ColorPicker'
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
const ImageProperties = ({ layers, setLayers, activeLayer }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const insertImageFromLibrary = id => {
    const updatedLayers = layers.map(layer => {
      return layer.id === activeLayer.id
        ? { ...layer, data: { ...layer.data, id } }
        : { ...layer }
    })
    setLayers([...updatedLayers])
  }
  return (
    <div>
      <h2>Image Properties</h2>
      <BasicProperties activeLayer={activeLayer} />
      <Button variant="contained" style={{ marginTop: 20 }} color="primary" onClick={() => setDialogOpen(true)}>Open Media Libaray</Button>
      {
        activeLayer.data.id !== 0 && <div style={{
          marginTop: 20,
          display: 'flex'
        }}>
          <img
            style={{
              maxHeight: 100
            }}
            alt="Contemplative Reptile"
            src={`./assets/images/${activeLayer.data.id}.jpg`}
            title="Contemplative Reptile"
          />
          <div style={{ marginLeft: 20 }}>
            <h3 style={{ marginTop: 10 }}>{`Name: ${media('image', activeLayer.data.id).name}`}</h3>
            <h3 style={{ marginTop: 10 }}>{`Size: ${media('image', activeLayer.data.id).size}`}</h3>
            <h3 style={{ marginTop: 10 }}>{`Type: ${media('image', activeLayer.data.id).type}`}</h3>
          </div>
        </div>
      }
      <MediaLibrary
        type="image"
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        confirm={id => insertImageFromLibrary(id)}
      />
    </div>
  )
}
const VideoProperties = ({ layers, setLayers, activeLayer }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const insertVideoFromLibrary = id => {
    const updatedLayers = layers.map(layer => {
      return layer.id === activeLayer.id
        ? { ...layer, data: { ...layer.data, id } }
        : { ...layer }
    })
    setLayers([...updatedLayers])
  }
  return (
    <div>
      <h2>Video Properties</h2>
      <BasicProperties activeLayer={activeLayer} />
      <Button variant="contained" style={{ marginTop: 20 }} color="primary" onClick={() => setDialogOpen(true)}>Open Media Libaray</Button>
      {
        activeLayer.data.id !== 0 && <div style={{
          marginTop: 20,
          display: 'flex'
        }}>
          <img
            style={{
              maxHeight: 100
            }}
            alt="Contemplative Reptile"
            src={`./assets/previews/${activeLayer.data.id}.jpg`}
            title="Contemplative Reptile"
          />
          <div style={{ marginLeft: 20 }}>
            <h3 style={{ marginTop: 10 }}>{`Name: ${media('video', activeLayer.data.id).name}`}</h3>
            <h3 style={{ marginTop: 10 }}>{`Size: ${media('video', activeLayer.data.id).size}`}</h3>
            <h3 style={{ marginTop: 10 }}>{`Type: ${media('video', activeLayer.data.id).type}`}</h3>
          </div>
        </div>
      }
      <MediaLibrary
        type="video"
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        confirm={id => insertVideoFromLibrary(id)}
      />
    </div>
  )
}
const BoardProperties = ({ board, setBoard }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false)

  return (
    <div>
      <h2>Board Properties</h2>
      <h3 style={{ margin: '16px 0' }}>{`Width: ${board.width}`}</h3>
      <h3 style={{ margin: '16px 0' }}>{`Height: ${board.height}`}</h3>
      <h3 style={{ marginTop: 16, marginBottom: 8 }}>Background: </h3>
      <RadioGroup row aria-label="gender" name="gender1" value={board.background.type} onChange={e => setBoard({
        ...board,
        background: {
          ...board.background,
          type: e.target.value
        }
      })}>
        <FormControlLabel value="color" control={<Radio />} label="color" />
        <FormControlLabel value="image" control={<Radio />} label="image" />
      </RadioGroup>
      {
        board.background.type === 'color'
          ?
          <ColorPicker
            value={board.background.color}
            onChange={color => setBoard({
              ...board,
              background: {
                ...board.background,
                color: color.hex
              }
            })}
          />
          :
          <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>Open Media Libaray</Button>
      }
      {
        (board.background.type === 'image' && board.background.imageId !== 0) && <div style={{
          marginTop: 20,
          display: 'flex'
        }}>
          <img
            style={{
              maxHeight: 100
            }}
            alt="Contemplative Reptile"
            src={`./assets/images/${board.background.imageId}.jpg`}
            title="Contemplative Reptile"
          />
          <div style={{ marginLeft: 20 }}>
            <h3 style={{ marginTop: 10 }}>{`Name: ${media('image', board.background.imageId).name}`}</h3>
            <h3 style={{ marginTop: 10 }}>{`Size: ${media('image', board.background.imageId).size}`}</h3>
            <h3 style={{ marginTop: 10 }}>{`Type: ${media('image', board.background.imageId).type}`}</h3>
          </div>
        </div>
      }
      <MediaLibrary
        type="image"
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        confirm={id => setBoard({
          ...board,
          background: {
            ...board.background,
            imageId: id
          }
        })}
      />
    </div>
  )
}
export default ({ layers, setLayers, activeLayerID, board, setBoard }) => {
  const activeLayer = layers.find(layer => layer.id === activeLayerID) || {}
  return (
    <div style={{
      width: 380,
      height: 'calc(100vh - 80px)',
      backgroundColor: '#f1f3f7',
      padding: 20
    }}>
      {
        activeLayer.data ? {
          'image': <ImageProperties activeLayer={activeLayer} layers={layers} setLayers={setLayers} />,
          'video': <VideoProperties activeLayer={activeLayer} layers={layers} setLayers={setLayers} />
        }[activeLayer.data.type]
          : <BoardProperties board={board} setBoard={setBoard} />
      }

    </div>
  )
}