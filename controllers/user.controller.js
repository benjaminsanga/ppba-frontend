const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

const UserValidator = require("../validators/user.validator.js");

// Create An Account
exports.signup = async (req, res) => {
  let userData = req.body;
  const { value, error } = UserValidator.validate(userData);
  if (error)
    return res
      .status(400)
      .json({
        message: "Please fill all required fields",
        data: error.details,
      });

  // encrypt users password
  bcrypt.genSalt(10, (genSaltError, salt) => {
    bcrypt.hash(userData.password, salt, async (hashError, hash) => {
      if (hashError) throw hashError;
      
      // new user password hash
      userData.password = hash;

      // save user to db
      try {
        let newUser = await User.create(userData);
        return res.status(200).json({ message: "User Created", data: {} });
      } catch (err) {
        if (err.errors)
          return res
            .status(400)
            .json({ message: err.errors[0].message, data: err.errors });
        return res.status(500).json({ message: err.message, data: {} });
      }
    });
  });
};

// Login A User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please Fill all Fields", data: {} });
  } else {
    const user = await User.findOne({ where: { email: "benjotaiba@gmail.com" } });
    
    if (!user)
      return res.status(404).json({ message: "Account not found", data: {} });

    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Incorrect Password", data: {} });

    // generate payload
    const payload = { id: user.uuid, email: user.email, status: user.status };
    // Sign the Token
    // expires in one week
    jwt.sign(
      payload,
      process.env.JWTKey,
      { expiresIn: 604800 },
      (err, token) => {
        if (err) {
          console.log(err)
          return res
            .status(500)
            .json({ message: "An Unknown Error Occured", data: {} });
        }
        return res
          .status(200)
          .json({
            message: "Login Success",
            data: { token: "Bearer " + token },
          });
      }
    );
  }
};
