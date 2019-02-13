const router = require('express').Router()

const Students = require('../db/models/students')
const Campuses = require('../db/models/campuses')

router.get('/', async (req, res, next) => {
    try {
     const studentsAll = await Students.findAll();
     res.json(studentsAll)
    } catch (err) {
    next(err) 
    }
})

router.get('/:studentId', async (req, res, next) => {
      try {
        const studentId = req.params.studentId;
        const student = await Students.findById(studentId, {
            include: [{model: Campuses}]
        })
        if (student) res.json(student)
        else res.status(400).json('Student does not exist')
      } catch (err) {
        next(err);
      }
    })

router.post('/', async (req, res, next) => {
        try {
          const addStudent = await Campuses.create(req.body)
          res.json(addStudent);
        } catch (err) {
          next(err)
        }
      })

router.put('/:studentId', async (req, res, next) => {
  try {
    const specificStudent = await Students.findById(req.params.studentsId)
    const result = await specificStudent.update(req.body)
    res.json(result);
  } catch (err) {
    next(err)
  }
})

router.delete('/:studentId', async (req, res, next) => {
        try {
          const id = req.params.studentId;
          await Students.destroy({ where: {id}});
          res.status(204).send('Deleted Student')
        } catch (err) {
          next(err)
        }
      })


module.exports = router
