const express = require('express');
const router = express.Router();

const pesananLaundryController = require('../controllers/pesananLaundryController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', pesananLaundryController.getAll);
router.get('/:id', pesananLaundryController.getById);
router.post('/', cekApiKey, pesananLaundryController.create);

module.exports = router;
