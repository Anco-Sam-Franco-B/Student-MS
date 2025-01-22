import express from 'express'
import { getProfile, postProfile, updateProfile, deleteProfile } from '../../controllers/profileControllers.js'
const profileRoute=express.Router()

profileRoute.get('/', getProfile)
profileRoute.post('/', postProfile)
profileRoute.put('/:id', updateProfile)
profileRoute.delete('/:id', deleteProfile)

export default profileRoute