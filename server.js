const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
app.use('/', serveStatic('build'))
app.get(/.*/, function (req, res) {
	res.sendFile('build/index.html', { root: __dirname })
})
const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)