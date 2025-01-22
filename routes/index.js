// import express from 'express'
// import profileRoute from './router/profile.routes.js'
// import studentRoutes from './router/students.routes.js'

// const router=express.Router()

// //define routes
// router.use('/profile', profileRoute)
// router.use('/students', studentRoutes)

// export default router


fetch('http://www.omdbapi.com/?i=tt0944947&Season=1')
.then((resp)=>{
    console.log(resp)
})
.catch((err)=>{
    console.error(err)
})