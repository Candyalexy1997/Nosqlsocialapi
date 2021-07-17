const router = require('express').Router();
const User= require('../../models/User');

router.get('/', async function (req, res){
    const response = await User.find({}).populate('thoughts')
    res.json(response)
})
router.post('/', async function (req, res){
    const response = await User.create({
        username: req.body.username,
        email: req.body.email
    })
    res.json(response)
})

module.exports= router;