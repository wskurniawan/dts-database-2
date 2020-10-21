// register root file untuk menggunakan sourcemap
import 'source-map-support/register'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'

async function initApp() {
  const app = express()

  app.use(bodyParser.json())

  app.post('/customer', function(req, res, next) {

  })

  app.get('/customer', function(req, res, next) {

  })

  app.get('/cutomer/:id', function(req, res, next) {

  })

  app.put('/customer', function(req, res, next) {

  })

  app.delete('/customer', function(req, res, next) {

  })

  app.use(function(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(500).send({
      success: false,
      message: err.message
    })
  })

  app.listen(process.env.PORT || 8000, () => {
    console.log(`App listen on port ${ process.env.PORT || 8000 }`)
  })
}

initApp()