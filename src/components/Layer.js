import React from 'react'
import Anchor from './Anchor'
import Guide from './Guide'
import TextLayer from './layers/Text'
import TimeLayer from './layers/Time'
import { media } from '../medias'
export default ({
  layer,
  board,
  setLayers,
  layers,
  activeLayerID,
  setActiveLayerID
}) => {
  const [start, setStart] = React.useState(null)
  const [editing, setEditing] = React.useState(false)
  const tops = layers.filter(l => l.id !== layer.id).map(l => l.top)
  const bottoms = layers.filter(l => l.id !== layer.id).map(l => l.top + l.height)
  const lefts = layers.filter(l => l.id !== layer.id).map(l => l.left)
  const rights = layers.filter(l => l.id !== layer.id).map(l => l.left + l.width)
  const layerXs = tops.concat(bottoms)
  const layerYs = lefts.concat(rights)

  React.useEffect(() => {
    if (JSON.stringify(start) !== JSON.stringify({}) && start !== null) {
      board.current.addEventListener('mousemove', drag)
      board.current.addEventListener('mouseup', endDrag)
    }
  }, [start])
  const handleUpdateLayer = updatedLayer => {
    setLayers(layers.map(layer => {
      if (layer.id === updatedLayer.id) return { ...updatedLayer }
      else return { ...layer }
    }))
  }
  const offset = ({ position, x, y }) => {
    if (position === 'left-top')
      handleUpdateLayer({
        ...layer,
        left: layer.left + x,
        top: layer.top + y,
        width: layer.width - x,
        height: layer.height - y
      })
    if (position === 'right-top')
      handleUpdateLayer({
        ...layer,
        top: layer.top + y,
        width: layer.width + x,
        height: layer.height - y
      })
    if (position === 'left-bottom')
      handleUpdateLayer({
        ...layer,
        left: layer.left + x,
        width: layer.width - x,
        height: layer.height + y
      })
    if (position === 'right-bottom')
      handleUpdateLayer({
        ...layer,
        width: layer.width + x,
        height: layer.height + y
      })
  }
  const startDrag = e => {
    setStart({ left: e.clientX, top: e.clientY })
  }
  const endDrag = () => {
    setStart({})
    board.current.removeEventListener('mousemove', drag)
  }
  const drag = e => {
    var newLeft = layer.left + e.x - start.left
    var newTop = layer.top + e.y - start.top
    var newRight = layer.left + e.x - start.left + layer.width
    var newBottom = layer.top + e.y - start.top + layer.height
    if (newLeft < 0) newLeft = 0
    if (newTop < 0) newTop = 0
    if (newRight > window.innerWidth / 1.5) newLeft = window.innerWidth / 1.5 - layer.width
    if (newBottom > window.innerHeight / 1.5) newTop = window.innerHeight / 1.5 - layer.height
    if (layerYs.some(layerY => Math.abs(layerY - newLeft) < 10)) {
      newLeft = layerYs.find(layerY => Math.abs(layerY - newLeft) < 10)
    }
    if (layerXs.some(layerX => Math.abs(layerX - newTop) < 10)) {
      newTop = layerXs.find(layerX => Math.abs(layerX - newTop) < 10)
    }
    if (layerYs.some(layerY => Math.abs(layerY - newRight) < 10)) {
      newLeft = layerYs.find(layerY => Math.abs(layerY - newRight) < 10) - layer.width
    }
    if (layerXs.some(layerX => Math.abs(layerX - newBottom) < 10)) {
      newTop = layerXs.find(layerX => Math.abs(layerX - newBottom) < 10) - layer.height
    }
    handleUpdateLayer({
      ...layer,
      left: newLeft,
      top: newTop
    })
  }
  const isGuideShow = (name) => {
    if (name === 'top') {
      return layerXs.some(layerX => Math.abs(layerX - layer.top) < 10)
    }
    if (name === 'bottom') {
      return layerXs.some(layerX => Math.abs(layerX - layer.top - layer.height) < 10)
    }
    if (name === 'left') {
      return layerYs.some(layerY => Math.abs(layerY - layer.left) < 10)
    }
    if (name === 'right') {
      return layerYs.some(layerY => Math.abs(layerY - layer.left - layer.width) < 10)
    }
  }
  const handleMediaSizeFitting = layer => {
    const baseOnWidth = layer.width / layer.height > 1
    const originMediaWidth = media(layer.data.type, layer.data.id).width
    const originMediaHeight = media(layer.data.type, layer.data.id).height
    const layerWidth = baseOnWidth ? layer.width : originMediaWidth * layer.height / originMediaHeight
    const layerHeight = baseOnWidth ? originMediaHeight * layer.width / originMediaWidth : layer.height
    const updatedLayers = layers.map(y => {
      return y.id === activeLayerID
        ? {
          ...y,
          width: layerWidth,
          height: layerHeight
        }
        : { ...y }
    })
    setLayers([...updatedLayers])
  }
  return (
    <g
      onFocus={() => setActiveLayerID(layer.id)}
      // onBlur={() => setActiveLayerID({})}
      style={{ outline: 'none' }}
      tabIndex="-1"
      onMouseDown={startDrag}
    >
      <rect
        style={{
          fill: 'transparent',
          stroke: layer.id === activeLayerID ? '#bebebe' : undefined,
          strokeWidth: layer.id === activeLayerID ? 1 : 0
        }}
        x={layer.left}
        y={layer.top}
        width={layer.width}
        height={layer.height}
      />
      {
        ['image', 'video'].includes(layer.data.type) &&
        <image
          xlinkHref={{
            'image': `./assets/images/${layer.data.id}.jpg`,
            'video': `./assets/previews/${layer.data.id}.jpg`,
          }[layer.data.type]}
          x={layer.left}
          y={layer.top}
          width={layer.width}
          height={layer.height}
          onMouseDown={startDrag}
        />
      }
      {
        ['image', 'video'].includes(layer.data.type) &&
        layer.data.id > 0 &&
        <>
          <image
            xlinkHref={{
              'image': `./assets/images/0.jpg`,
              'video': `./assets/previews/0.jpg`,
            }[layer.data.type]}
            x={layer.left + 10}
            y={layer.top + 10}
            width={20}
            height={20}
          />
          {layer.id === activeLayerID && <image
            xlinkHref={`./assets/tools/fit.jpg`}
            x={layer.left + layer.width - 30}
            y={layer.top + layer.height - 30}
            width={20}
            height={20}
            onClick={() => handleMediaSizeFitting(layer)}
          />}
        </>
      }
      {
        (!editing &&
          ['text', 'time'].includes(layer.data.type) &&
          layer.data.value.trim().length === 0) &&
        <image
          xlinkHref={`./assets/tools/${layer.data.type}.jpg`}
          x={layer.left}
          y={layer.top}
          width={layer.width}
          height={layer.height}
          onMouseDown={startDrag}
          onDoubleClick={() => layer.data.type === 'text' ? setEditing(true) : {}}
        />
      }
      {
        (
          editing ||
          ['text', 'time'].includes(layer.data.type) &&
          layer.data.value.trim().length > 0
        ) &&
        {
          'text': <TextLayer
            layer={layer}
            editing={editing}
            setEditing={setEditing}
            finish={value => handleUpdateLayer({
              ...layer,
              data: {
                ...layer.data,
                value
              }
            })}
          />,
          'time': <TimeLayer
            layer={layer}
            isActivated={layer.id === activeLayerID}
          />,
        }[layer.data.type]
      }
      {layer.id === activeLayerID && <>
        <Anchor
          position="left-top"
          board={board}
          cx={layer.left}
          cy={layer.top}
          layer={layer}
          offset={offset}
        />
        <Anchor
          position="right-top"
          board={board}
          cx={layer.left + layer.width}
          cy={layer.top}
          layer={layer}
          offset={offset}
        />
        <Anchor
          position="left-bottom"
          board={board}
          cx={layer.left}
          cy={layer.top + layer.height}
          layer={layer}
          offset={offset}
        />
        <Anchor
          position="right-bottom"
          board={board}
          cx={layer.left + layer.width}
          cy={layer.top + layer.height}
          layer={layer}
          offset={offset}
        />
        <Guide x1={layer.left - 100} y1={layer.top} x2={layer.left + layer.width + 100} y2={layer.top} show={isGuideShow('top')} />
        <Guide x1={layer.left - 100} y1={layer.top + layer.height} x2={layer.left + layer.width + 100} y2={layer.top + layer.height} show={isGuideShow('bottom')} />
        <Guide x1={layer.left} y1={layer.top - 100} x2={layer.left} y2={layer.top + layer.height + 100} show={isGuideShow('left')} />
        <Guide x1={layer.left + layer.width} y1={layer.top - 100} x2={layer.left + layer.width} y2={layer.top + layer.height + 100} show={isGuideShow('right')} />
      </>}
    </g>
  )
}