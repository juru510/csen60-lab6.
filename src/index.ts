import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})


app.use('/*',serveStatic({
  root: './static',
}))
