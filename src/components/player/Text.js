import React from 'react'
export default ({ layer }) => {
  const zoom = 1.5
  return (
    <div
      style={{
        width: layer.width * zoom,
        height: layer.height * zoom,
        color: layer.data.fontColor ? layer.data.fontColor : undefined,
        backgroundColor: layer.data.backgroundColor ? layer.data.backgroundColor : undefined,
        fontSize: layer.data.fontSize ? layer.data.fontSize * zoom + 'px' : undefined
      }}
    >
      {layer.data.value}
    </div>
  )
}