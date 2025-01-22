export const getProfile= async(req,res)=>{
    try{
        await res.status(200).json({message: 'Get Profile route is working well'})
    }
    catch(err){
        return await res.status(500).json({error: 'Get route not working well'})
    }
}

export const postProfile= async(req,res)=>{
    try{
        await res.status(200).json({message: 'add Profile route is working well'})
    }
    catch(err){
        return await res.status(500).json({error: 'add route not working well'})
    }
}

export const updateProfile= async(req,res)=>{
    try{

    }
    catch(err){

    }
}

export const deleteProfile= async(req,res)=>{
    try{

    }
    catch(err){

    }
}