const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')

router.get('/new-celebrity',(req, res) => {
    // console.log(req.query)
    res.render('/new-celebrity')
})

router.post('/celebrities/create', async (req, res) => {
    console.log(req.body)
    try {
        const newCelebrity = await Celebrity.create(req.body)
        //   response.redirect(`/celebrities/${newCelebrity._id}`)
           response.redirect('/')
    }
    catch(error) {
        console.error('There was an error adding celeb', error)
        res.render('/new-celebrity')
    }

  })

module.exports = router