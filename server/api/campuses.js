const router = require('express').Router()

const Campuses = require('../db/models/campuses')
const Students = require('../db/models/students')

router.get('/', async (req, res, next) => {
    try {
     const campusesAll = await Campuses.findAll();
     res.json(campusesAll)
    } catch (err) {
    next(err)
    }
  })

router.get('/:campusId', async (req, res, next) => {
    try {
      const campusId = req.params.campusId;
      const campus = await Campuses.findById(campusId, {
          include: [{model: Students}]
    })
      if (campus) res.json(campus)
      else res.status(400).json('Campus does not exist')
    } catch (err) {
      next(err)
    }
  })

router.post('/', async (req, res, next) => {
    try {
      const addCampus = await Campuses.create(req.body)
      res.json(addCampus);
    } catch (err) {
      next(err)
    }
  })

router.put('/:campusId', async (req, res, next) => {
  try {
    const specificCampus = await Campuses.findById(req.params.campusId)
    const result = await specificCampus.update(req.body)
    res.json(result);
  } catch (err) {
    next(err)
  }
})

router.delete('/:campusId', async (req, res, next) => {
    try {
      const id = req.params.campusId;
      await Campuses.destroy({ where: {id}});
      res.status(204).send('Deleted Campus')
    } catch (err) {
      next(err)
    }
  })


  module.exports = router
