import express from 'express'
import next from 'next'
import app from './app'

const nextApp = next()

nextApp.prepare().then(() => {
  const server = express()

  server.use(
    app.express({
      renderPage ({ req, res, pagePath }) {
        return nextApp.render(req, res, pagePath, req.query)
      }
    })
  )

  server.listen(3000)
})
