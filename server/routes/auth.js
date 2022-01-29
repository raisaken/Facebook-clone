const router = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcrypt")

//create
router.post('/register', async (req, res)=>{
  try{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
    username:req.body.username, 
    email: req.body.email,
    password: hashedPassword,
  })
  const user = await newUser.save()
  res.status(200).json(user)
 
  }
  
  catch(err){
    res.status(400).json("error on server")
  }

  
})

//login  
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    !user && res.status(404).json("user not found")

    const validpassword = await bcrypt.compare(req.body.password, user.password)
    !validpassword && res.status(400).json("password not matched")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});
  

module.exports = router