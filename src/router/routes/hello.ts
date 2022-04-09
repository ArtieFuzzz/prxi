import { z } from 'zod'
import { createRouter } from '../createRouter'

export const helloRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        username: z.string().nullish(),
      })
      .nullish(),
    resolve({ input, ctx }) {
      return {
        text: `Hello ${input?.username ?? ctx.user?.name ?? 'world'}!`
      }
    }
  })
