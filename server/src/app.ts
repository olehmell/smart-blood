import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.preMiddlewares()
    this.routes()
  }

  // middlewares running before routes
  private preMiddlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(bodyParser.json())

    this.express.use((req: any, res: any) => {
      res.status(200).json(res.response || {})
    })
  }

  private routes() {
    this.express.use(routes)
  }
}

export default new App().express
