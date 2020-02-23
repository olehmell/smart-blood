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
    this.posMiddlewares()
  }

  // middlewares running before routes
  private preMiddlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  // middlewares running after routes
  private posMiddlewares(): void {
    this.express.use((err: any, req: any, res: any, next: any) => {
      const response = {
        errors: [],
        message: err.message,
        status: err.status || 400,
      }

      if (err.errors && Array.isArray(err.errors)) {
        response.errors =
          err.inner
            .map(({ path, message }: { path: string, message: object }) => ({ [path]: req.polyglot.t(message) }))
      }

      res.status(response.status).json(response)
    })

    this.express.use((req: any, res: any) => {
      res.status(200).json(res.response || {})
    })
  }

  private routes() {
    this.express.use(routes)
  }
}

export default new App().express
