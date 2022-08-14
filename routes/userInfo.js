const router = require('express').Router();
const {userControlPost, userControlGet} = require('../controls/userControl');



router.post('/:email', userControlPost)

router.get('/:email', userControlGet)



module.exports = router;





