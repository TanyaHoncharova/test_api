const express = require('express');

const ctrl = require('../../controllers/users');

const {validateBody} = require ("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();


router.get('/', ctrl.getAllUsers);

router.get('/:id', ctrl.getUserById);

router.post('/',  validateBody(schemas.addSchema), ctrl.addUser);

router.delete('/:id', ctrl.deleteUser);

router.put('/:id', validateBody(schemas.addSchema), ctrl.updateUser);

module.exports = router;
