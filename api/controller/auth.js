import User from "../models/User";

// register a new account for a user
export const registerUser = async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedpassword = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedpassword
        })
        await newUser.save();
        res.status(200).send("User Created Successfully");
    } catch (err) {
        next(err);
    }
};