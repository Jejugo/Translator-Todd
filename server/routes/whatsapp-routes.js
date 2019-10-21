const router = require('express').Router();
// const Chapi = require('whatsapp-chapi');
// const bot = new Chapi('515d3ad0-cb99-11e9-b173-09f70ef4ad89', '515d3ad1-cb99-11e9-b173-09f70ef4ad89');
// bot.signIn('1998102793');

router.post('/whatsapp', function (req, res) {
    console.log('bateu', req.body[req.body.length-1].data.text);
});

module.exports = router;