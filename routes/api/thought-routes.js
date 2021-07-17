const router = require('express').Router();
const Thought= require('../../models/Thought');

router.get('/', async function (req, res){
    const response = await Thought.find({}).populate('thoughts')
    res.json(response)
})
router.post('/', async function (req, res){
    const response = await Thought.create({
        username: req.body.username,
        email: req.body.email
    })
    res.json(response)
})

module.exports= router;