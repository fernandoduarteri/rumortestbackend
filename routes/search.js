const { Router } = require('express');
const { getImages } = require('../controllers/search');

const router = Router();


// Search Images
router.post('/', getImages);

module.exports = router;