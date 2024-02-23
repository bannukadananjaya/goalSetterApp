const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../model/userModel");

// @desc Register new user
// @route POST api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add  all fields");
  }

  //check if user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User allready exist");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user details");
  }
  res.json({ message: "Register User" });
  // if(!req){
  //     res.status(400)
  //     throw new Error('Please fill the details')
  // }
  // const user = await User.create({
  // })
});


// @desc Login user
// @route POST api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    //caheck for user eamil
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
          });
    }
  
});

//@desc get users
//@route GET api/users
//@access Public
const getMe = asyncHandler(async (req, res) => {
  
    // const users = await User.find()

    // res.status(200).json(users);
    res.json({ message: "User data display" });
  }); 

//generate JWT
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d',})
}


module.exports = {
  registerUser,
  loginUser,
  getMe
};
