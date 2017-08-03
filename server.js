import express from 'express'
import app from './app'

const server = express()
server.use(app.express())
server.listen(3000)
