const express = require('express')
const {renderToString} = require('react-dom/server')
const {html} = require('htm/react')
const {App} = require('./App')

const port = 1234
const onServerReady = () => {
  console.log(`Server listening at http://localhost:${port}`)
}
const handleRender = (_, res) => {
  const reatTree = html`
    <${App} />
  `
  const content = renderToString(reatTree)

  res.send(content)
}

express()
  .use(handleRender)
  .listen(port, onServerReady)
