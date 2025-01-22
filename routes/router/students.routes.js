import express from 'express'
import { viewStudent, deleteStudent, updateform, updateStudent, studentForm, addStudent } from '../../controllers/studentController.js'

const studentRoutes=express.Router()

studentRoutes.get('/', viewStudent)
studentRoutes.get('/update-student/:id', updateform)
studentRoutes.get('/add-newStudent', studentForm)
studentRoutes.post('/save-student', addStudent)
studentRoutes.post('/edit-student/:id', updateStudent)
studentRoutes.get('/delete-student/:id', deleteStudent)

export default studentRoutes