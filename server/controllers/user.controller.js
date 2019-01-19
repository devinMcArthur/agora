import User from "../models/user";
import sanitizeHtml from "sanitize-html";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import validateUserSignupInputs from "../validators/validateUserSignupInputs";
import validateLoginInput from "../validators/validateLoginInput";

import keys from "../config/keys";

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export async function getAllUsers(req, res) {
  try {
    let users = await User.find();
    res.json(users);
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Save a new User
 * @param req
 * @param res
 * @returns void
 */
export async function addUser(req, res) {
  try {
    const { errors, isValid } = validateUserSignupInputs(req.body);
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    var user = await User.findOne({ email: req.body.email });
    if (user) {
      errors.email = "Email already exists";
      console.log(errors);
      return res.status(400).json(errors);
    } else {
      // Define new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password
      var salt = await bcrypt.genSalt(10);
      var hash = await bcrypt.hash(newUser.password, salt);
      newUser.password = hash;
      user = await newUser.save();

      res.json(user);
    }
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}

/**
 * Login a User
 * @param req
 * @param res
 * @returns void
 */
export async function loginUser(req, res) {
  try {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });
    if (!user) {
      errors.email = "User with this email not found";
      console.log(errors);
      return res.status(400).json(errors);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      let personalUniverse = null || user.personalUniverse;
      let admin = user.admin || false;
      const payload = {
        id: user._id,
        name: user.name,
        admin,
        personalUniverse
      };

      let token;
      if (req.body.rememberMe) {
        token = await jwt.sign(payload, keys.secretOrKey);
      } else {
        token = await jwt.sign(payload, keys.secretOrKey, {
          expiresIn: 3600 * 24
        });
      }

      res.json({ token: `Bearer ${token}` });
    }
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    res.status(500).json(errors);
  }
}
