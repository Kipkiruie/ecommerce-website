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
    try {
      const { email, password } = req.body;

      //check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found'});
      }

      //compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials'});
      }

      //create a jwt token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
      res.status(200).json({ 
        message: 'Login succesful',
        token,
        user:{
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error', details: error });
    }
  }


  async logout(req, res) {
    // logout logic

    try {
      res.clearCookie('token');
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error', details: error });
    }
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

    try {
      const userId = req.userId;
      const {name, email, password, address, phone} = req.body;

      //find user by id
      const user = await User.findById(userId);
      if (!user) {
        return res.status(400).json({ message: 'User not found'});
      }

      if (name) user.name = name;
      if (email) user.email = email;
      if (address) user.address = address;
      if (phone) user.phone = phone;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
      user.updatedAt = Date.now();
      await user.save();
      res.status(200).json({ message: 'Profile updated successfuly',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error', details: error });
    }
  }

}

export default new AuthController(); // Path: server/routes/authRoutes.js