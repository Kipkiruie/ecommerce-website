import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

class AuthController {

  async signup(req, res) {
    // signup logic
    try {
      const { name, email, password } = req.body;

      //check if user already exists
      const findUser = await User.findOne({ email });
      if (findUser) {
        return res.status(400).json({ message: 'User already exists' });

      }

      //hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
       //create the user
      const user = await User.create({ name, email, password: hashedPassword });

      //create jwt token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
      res.status(201).json({
        message: 'User created successfully',
        token,
        user: {
          id: user_id,
          name: user.name,
          email: user.email,
        },
      });
    
    } catch (error) {
      res.status(500).json({ error: 'Server error', error });
    }

   
  }

  async login(req, res) {
    // login logic
  }


  async logout(req, res) {
    // logout logic
  }

  async forgotPassword(req, res) {
    // forgot password logic
  }

  async resetPassword(req, res) {
    // reset password logic
  }

  async getProfile(req, res) {
    // get profile logic
  }

  async updateProfile(req, res) {
    // update profile logic
  }

}

export default new AuthController(); // Path: server/routes/authRoutes.js