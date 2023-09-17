const express= require('express');
const router= express.Router();

const studentController= require('../controllers/students_controller');

router.post('/create', studentController.createstudent);
router.get('/add', studentController.addstudent);
router.get('/delete', studentController.delete);

router.post('/addinterview', studentController.addinterview);
router.get('/scheduleinterview', studentController.scheduleinterview);
router.get('/exportdata', studentController.exportdata);


module.exports= router;