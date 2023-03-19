const express = require('express');
const router = express.Router();

const { getPeople, postPerson, postPersonPostman, putPerson, deletePerson } = require('../controllers/people')

router.get('/', getPeople);

router.post('/', postPerson);

router.post('/postman', postPersonPostman);

router.put('/:id', putPerson);

router.delete('/:id', deletePerson);

module.exports = router;