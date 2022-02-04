const User = require('../models/User');
const bcryptjs = require('bcryptjs')

exports.signupGetController = (req, res, next) => {
    res.render('pages/auth/signup', { title: "Create A New Account" })
}
exports.signupPostController = async (req, res, next) => {
    let { username, email, password } = req.body;

    try {
        let hashedPassword = await bcryptjs.hash(password, 11)
        const getUser = new User({
            username, email, password: hashedPassword
        })
        let createdUser = await getUser.save()
        console.log("User created successfully", createdUser);
        res.render('pages/auth/signup', { title: "Create A New Account" })
    } catch (err) {
        console.log(err);
        next(err);
    }




}
exports.loginGetController = (req, res, next) => {
    res.render('pages/auth/login', { title: "Login To Your Account" })
}
exports.loginPostController =async (req, res, next) => {
    const {email, password} =  req.body;
    try{

        let user = await User.findOne({email})
        if(!user){
            return res.json({
                "Message": "Invalid Credential"
            })
        }
        else{
            let match = await bcryptjs.compare(password, user.password)
            if(!match){
                return res.json({
                    "Message": "Invalid Credential"
                })
            }else{
                console.log("successfully login",user);
                res.render('pages/auth/login', { title: "Login To Your Account" })
            }

        }






    }catch(err){
        console.log(err);
        next(err);
    }
}
exports.logoutController = (req, res, next) => {

}