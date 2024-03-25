

export const  addBlog =async (req, res)=>{

    const data= req.body 
    const addBlog= await userModel.create(data)
    console.log(data)
    res.send(addBlog)
}


export const  addContact =async (req, res)=>{

    const data= req.body 
    const addContact= await userModel.create(data)
    console.log(data)
    res.send(addContact)
}


export const  addExperiences =async (req, res)=>{

    const data= req.body 
    const addExperiences= await userModel.create(data)
    console.log(data)
    res.send(addExperiences)
}

export const  addProjects =async (req, res)=>{

    const data= req.body 
    const addProjects= await userModel.create(data)
    console.log(data)
    res.send(addProjects)
}

export const  addAdminLogin =async (req, res)=>{

    const data= req.body 
    const addAdminLogin= await userModel.create(data)
    console.log(data)
    res.send(addAdminLogin)
}


export const  addAdminSignup =async (req, res)=>{

    const data= req.body 
    const addAdminSignup= await userModel.create(data)
    console.log(data)
    res.send(addAdminSignup)
}


export const  addAdminAchievements =async (req, res)=>{

    const data= req.body 
    const addAdminAchievements= await userModel.create(data)
    console.log(data)
    res.send(addAdminAchievements)
}

export const  addPosts =async (req, res)=>{

    const data= req.body 
    const addPosts= await userModel.create(data)
    console.log(data)
    res.send(addPosts)
}

export const  addAdminExperiences =async (req, res)=>{

    const data= req.body 
    const addAdminExperiences= await userModel.create(data)
    console.log(data)
    res.send(addAdminExperiences)
}