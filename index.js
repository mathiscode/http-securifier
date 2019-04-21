const express = require('express')
const request = require('request')
const URLParser = require('url')

const app = express()

app.use((req, res, next) => {
  try {
    if (!req.query.url) return res.redirect('https://github.com/mathiscode/http-securifier')

    const rawUrl = req.query.url
    const url = URLParser.parse(rawUrl)

    if (!url || !url.hostname) return res.status(400).json({ error: 'Invalid URL' })

    req.pipe(request(rawUrl, { rejectUnauthorized: false })).pipe(res)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'An error occurred fetching the resource' })
  }
})

app.listen(process.env.PORT || 8080, () => console.log('HTTP-Securifier running!'))
