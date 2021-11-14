export const media = (type, id) => ({
  'image': images[id],
  'video': videos[id],
}[type])
const images = {
  1: {
    name: '擎天崗',
    size: '127 KB',
    type: 'jpg',
    w: 1477,
    h: 1108
  },
  2: {
    name: 'Doughnuts',
    size: '440 KB',
    type: 'jpg',
    w: 1823,
    h: 2760
  },
  3: {
    name: 'Food & Drink',
    size: '3.7 MB',
    type: 'jpg',
    w: 5085,
    h: 3390
  },
  4: {
    name: 'West Virginia, USA',
    size: '8 MB',
    type: 'jpg',
    w: 5504,
    h: 8265
  },
}
const videos = {
  1: {
    name: '月亮',
    size: '1.5 MB',
    type: 'mp4',
    w: 480,
    h: 270
  },
  2: {
    name: '空中的花朵',
    size: '1.2 MB',
    type: 'mp4',
    w: 960,
    h: 540
  },
  3: {
    name: '溫室',
    size: '8.7 MB',
    type: 'mp4',
    w: 1280,
    h: 720
  },
  4: {
    name: '湖邊',
    size: '11 MB',
    type: 'mp4',
    w: 1280,
    h: 720
  },
}