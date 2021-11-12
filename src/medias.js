export const media = (type, id) => ({
  'image': images[id],
  'video': videos[id],
}[type])
const images = {
  1: {
    name: '擎天崗',
    size: '127 KB',
    type: 'jpg'
  },
  2: {
    name: 'SAVE THE DATE',
    size: '723 KB',
    type: 'jpg'
  },
  3: {
    name: 'Sunset in Golden Hole, Istanbul',
    size: '2.5 MB',
    type: 'jpg'
  },
  4: {
    name: 'West Virginia, USA',
    size: '8 MB',
    type: 'jpg'
  },
}
const videos = {
  1: {
    name: '月亮',
    size: '1.5 MB',
    type: 'mp4'
  },
  2: {
    name: '空中的花朵',
    size: '1.2 MB',
    type: 'mp4'
  },
  3: {
    name: '溫室',
    size: '8.7 MB',
    type: 'mp4'
  },
  4: {
    name: '湖邊',
    size: '11 MB',
    type: 'mp4'
  },
}