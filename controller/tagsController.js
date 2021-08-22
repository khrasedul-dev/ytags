const express = require('express')
const client = require('https')
const tagsRouter = express.Router()

tagsRouter.get('/',(req,res)=>{
    res.render('index')
})

tagsRouter.post('/:tags',(req,res)=>{

    const tags = req.params.tags

    const url = `https://rapidtags.io/api/generator?query=${tags}`

    function httpGet(url) {
        return new Promise((resolve, reject) => {
      
          client.get(url, (resp) => {
            let chunks = ''
      
            resp.on('data', (chunk) => {
              chunks+=chunk
            })
      
            resp.on('end', () => {
              resolve(chunks)
            })
      
            }).on("error", (err) => {
              reject(err)
            });
        })
      }
      
      (async(url) => {
        var buf = await httpGet(url);
        const data = JSON.parse(buf)
        res.json(data)
      })(url);

}) 


module.exports = tagsRouter