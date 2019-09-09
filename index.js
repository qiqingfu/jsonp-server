const express = require('express')
const app = express()

const STATIC_DATA = {
  code: 0,
  data: {
    'github': 'https://github.com/qiqingfu',
    'blog': 'https://qiqingfu.github.io/'
  }
}

app.get('/api/v1/getList', (req, res) => {
  // jsonpCallback 是对应 JSONP中的 callback 字段
  const { jsonpCallback, ...query } = req.query
  let data = null
  if (Object.keys(query).length > 0) {
    const result = {
      code: 0,
      data: query
    }
    data = JSON.stringify(result, null, 4)
  } else {
    data = JSON.stringify(STATIC_DATA)
  }
  const callback = `${jsonpCallback}(${data})`
  res.end(callback)
})

app.listen('8000', () => {
  console.log('prot: 8000')
})