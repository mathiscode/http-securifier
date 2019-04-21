const express = require('express')
const request = require('request')
const URLParser = require('url')

const app = express()

app.use((req, res, next) => {
  const rawUrl = req.query.url
  const url = URLParser.parse(rawUrl)

  if (!url.hostname) {
    return res.json(400, { error: 'Invalid URL' })
  }

  req.pipe(request(rawUrl)).pipe(res)

  // res.json({ rawUrl, url })
})

app.listen(process.env.PORT || 8080, () => console.log('HTTP-Securifier running!'))
