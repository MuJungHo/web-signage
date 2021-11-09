import React from 'react'
import Board from '../components/editor/Board'
export default () => {
  const [layers, setLayers] = React.useState([
    {
      id: 1,
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      data: {
        type: 'image',
        id: 1
      }
    },
    {
      id: 2,
      width: 100,
      height: 100,
      top: 200,
      left: 200,
      data: {
        type: 'video',
        id: 1
      }
    },
    {
      id: 3,
      width: 100,
      height: 100,
      top: 400,
      left: 400,
      data: {
        type: 'image',
        id: 2
      }
    },
  ])
  return (
    <Board layers={layers} setLayers={setLayers} />
  )
}