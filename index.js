const express = require('express')
const request = require('request')
const URLParser = require('url')

const app = express()

app.use((req, res, next) => {
  if (!req.query.url) return res.redirect('https://github.com/mathiscode/http-securifier')

  const rawUrl = req.query.url
  const url = URLParser.parse(rawUrl)

  if (!url || !url.hostname) return res.status(400).json({ error: 'Invalid URL' })

  req.pipe(request(rawUrl)).pipe(res)
})

app.listen(process.env.PORT || 8080, () => console.log('HTTP-Securifier running!'))
