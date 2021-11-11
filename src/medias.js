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
    name: '我懷疑妳在開車',
    size: '95 KB',
    type: 'jpg'
  },
  3: {
    name: '我知道了',
    size: '18 KB',
    type: 'jpg'
  },
  4: {
    name: '別再說了',
    size: '52 KB',
    type: 'jpg'
  },
}
const videos = {
  1: {
    name: '月亮',
    size: '1534 KB',
    type: 'mp4'
  },
  2: {
    name: '蚵仔麵線',
    size: '34945 KB',
    type: 'mp4'
  },
  3: {
    name: '讓浪漫做主',
    size: '34912 KB',
    type: 'mp4'
  },
  4: {
    name: '兔子',
    size: '10300 KB',
    type: 'mp4'
  },
}