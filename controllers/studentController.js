import db from '../DBConfig/database.js'

export const viewStudent= async (req,res)=>{
    try{
        const query='SELECT * FROM students'
        await db.query(query,async (err,data)=>{
            if(err) return  await res.status(500).send('Failed to Fetch Students Data.....')
            await res.status(200).render('view-students',{title: 'View Students | API-Student',data})
        })
    }
    catch(err){
        await res.status(500).send('Something went wrong')
    }
}

export const studentForm=async (req,res)=>{
    try {
        await res.status(200).render('student-form',{title: 'Add New Student Details'})
    } catch (err) {
        await res.status(500).send('Something went wrong')
        console.error(err)
    }
}

export const addStudent= async (req,res)=>{
    try{
        const {name,age,grade,email,phone,address}=await req.body
        const query=`INSERT INTO students VALUES('NULL','${name}', '${age}', '${grade}', '${email}', '${phone}', '${address}', 'NOW()', 'NOW()')`

        await db.query(query, async (err)=>{
            if(err) return  await res.status(500).send('Failed to add new Students Details.....')
            await res.redirect('/')
        })
    }
    catch(err){
        await res.status(500).send('Something went wrong')
        console.error(err)
    }
}

export const updateform= async(req,res)=>{
    try{
        const sid=parseInt(req.params.id)
        const query=`SELECT * FROM students WHERE id='${sid}'`
        await db.query(query,async (err,data)=>{
            if(err) return await await res.status(500).send('Failed to Fetch Students Data.....')
                    res.status(200).render('edit',{title: 'Update Students | API-Student',result: data})
        })
    }
    catch(err){
        await res.status(500).send('Something went wrong')
    }
}

export const updateStudent=async(req,res)=>{
    try{
        const sid=req.params.id
        const {name,age,grade,email,phone,address}=await req.body
        const query=`UPDATE students SET name='${name}', age='${age}', grade='${grade}', email='${email}', phone='${phone}', address='${address}' WHERE id='${sid}'`

        await db.query(query,async (err)=>{
            if(err) return await await res.status(500).send('Failed to update Students Details.....')
            res.redirect('/students')
        })

    }
    catch(err){
        await res.status(500).send('Something went wrong')
    }
}

export const deleteStudent= async (req,res)=>{
    try{
        const sid=parseInt(req.params.id)
        const query=`DELETE FROM students WHERE id='${sid}'`
        await db.query(query,async (err)=>{
            if(err){
                 await res.status(500).send('failed to delete student details from database') 
                 console.error(err)
                 return
            }
            await res.redirect('/students')
        })
    }
    catch(err){
        await res.status(500).send('Something went wrong please try again') 
        res.redirect('/students')
    }
} 