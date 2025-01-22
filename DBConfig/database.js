import mysql from 'mysql'
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_ms'
})

db.connect(async (err)=>{
    if(err) return await console.log(`FAILED TO CONNECT DATABASE & SERVER IS CRUSHED NOW...`)
    console.log('DATABASE CONNECTION SUCCESSFULLY...')
})

export default db