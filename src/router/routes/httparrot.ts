
import { request, SendAs } from '@artiefuzzz/lynx'
import { z } from 'zod'
import { pkg } from '../../pkg'
import { createRouter } from '../createRouter'

const BASE_URL = 'https://httparrot.herokuapp.com'

export const parrotRouter = createRouter()
  .query('get', {
    async resolve() {
      const req = await request(`${BASE_URL}/get`)
        .agent(`Prxi/${pkg().version} | Github > ArtieFuzzz/prxi`)
        .send()

      return req.json
    }
  })
  .mutation('post', {
    input: z.any(),
    async resolve({ input }) {
      console.log(input)
      const req = await request(`${BASE_URL}/post`, 'POST')
        .body(input.body, SendAs.JSON)
        .agent(`Prxi/${pkg().version} | Github > ArtieFuzzz/prxi`)
        .send()

      return req.json
    }
  })
