// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default (req, res) => {
  res.statusCode = 200

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Application-Type': 'application/json',
    'x-token-access': 'random',
  }

  // axios.options('http://jsonplaceholder.typicode.com/posts', headers)

  axios.post('http://jsonplaceholder.typicode.com/posts', req.body, headers)
  .then(res => {
    console.log('saveRequest.log', res.data)
  })

  res.json('')
}
