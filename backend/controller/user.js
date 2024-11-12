import userModel from "../mongoDB/model.js";

const userLogin = async(req, res)=>{
    try{
        console.log("reached userLogin")
        const data = req.body

        console.log(data)

        const check = await userModel.findOne({email: data.email})

        if(check){
            console.log("check found")
            return res.status(409).json({message:"User already exists"})
        }

        await userModel.create({
            email:data.email,
            password: data.password
        })

        console.log("created")

        return res.status(200).json({mesaage:"user creation success"})

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Internal Server error"})
    }
}

export default userLogin