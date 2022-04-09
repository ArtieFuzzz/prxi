import { createRouter } from './createRouter'
import { helloRouter } from './routes/hello'
import { parrotRouter } from './routes/httparrot'

export const appRouter = createRouter()
  .merge(helloRouter)
  .merge('httparrot:', parrotRouter)

export type AppRouter = typeof appRouter
