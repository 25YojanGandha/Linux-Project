const express = require('express');
const userRouter = express.Router();
const {getUser,getAllUser,updateUser,deleteUser}=require('../Controller/userController');
const {signup,login}=require('../Controller/authController');

// ,isAuthorised,protectRoute,forgetpassword,resetpassword,logout

let app=express();
app.use(express.json());
app.listen(3001);
app.use('/',userRouter);

// Login Route
userRouter
.route('/login')
.post(login)

// Signup Route
userRouter
.route('/signup')
.post(signup)

// // Logout Route
// userRouter
// .route('/logout')
// .get(logout)

// // Forgetpassword Route
// userRouter
// .route('/forgetpassword')
// .post(forgetpassword)

// //  Resetpassword Route
// userRouter
// .route('/resetpassword/:token')
// .post(resetpassword)

// UserProfile Route
userRouter
.route('/:id')
.patch(updateUser)
.delete(deleteUser)

// Admin Privillaged Functionality
// userRouter.use(isAuthorised(['admin']));
userRouter
.route('/')
.get(getAllUser)