const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const dev = process.env.NODE_ENV !== 'production'
const handle = app.getRequestHandler()

app.get('/ping', (req, res) => {
  res.send('pong!')
})

require('./router')(app)

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`> Listening on port ${listener.address().port}`)

    // if (dev) {
    //   fetch(`http://localhost:${port}/api/regenerate-all`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       token: process.env.SLACK_VERIFICATION_TOKEN
    //     })
    //   })
    // }
    // trigger own startup message in production
    if (!dev) {
      fetch(`http://localhost:${port}/api/startup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: process.env.SLACK_VERIFICATION_TOKEN
        })
      })
    }
})