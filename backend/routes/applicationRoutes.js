const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.get('/', applicationController.getApplications);
router.get('/:id', applicationController.getApplicationById);

// Other CRUD routes as needed...

module.exports = router;
