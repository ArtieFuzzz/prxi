
import { request } from '@artiefuzzz/lynx'
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
