require('dotenv').config({ path: '../keys.env' });
const mongoose=require('mongoose');
const emailValidator=require('email-validator');
const crypto=require('crypto');

const dbLink = process.env.dbLink;
console.log(dbLink);

// Stablishes The Connection Between MongoDB & Application
mongoose.connect(dbLink)
.then(function(db){
  console.log(db);
  console.log('user db connected');
})
.catch(function(err){
  console.log(err);
});

// UserSchema: Skeleton For User Details
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    computerName:{type:String,require:true},
    email:{type:String,required:true,unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{type:String,required:true,minLength:8},
    confirmPassword:{type:String,required:true,minLength:8,
        validate:function(){
            return this.confirmPassword==this.password;
        }
    },
    role:{type:String,enum:['admin','user','sharedUser'],default:'user'},
    // profileImage:{},
    resetToken:{type:String}
});

// Pre Hook To Remove ConfirmPassword From Unnessarily Getting Stored To DB
userSchema.pre('save',function(){
    this.confirmPassword=undefined;
})

// Generates Reset Token For ForgetPassword Feature
userSchema.methods.createResetToken=function(){
    const resetToken=crypto.randomBytes(32).toString('hex');
    this.resetToken=resetToken;
    return resetToken;
}

// Reset The New Password Details To DB
userSchema.methods.resetPasswordHandler=function(password,confirmPassword){
    this.password=password;
    this.confirmPassword=confirmPassword;
    this.resetToken=undefined;
}

// UserModel Is Created And Exported For Further Use
const userModel=mongoose.model('userModel',userSchema);
module.exports=userModel;


// async function createUser(){
//     let user={
//         name: "Yojan",
//         password: '123456789',
//         confirmPassword: '123456789'
//     }

//     let data = await userModel.create(user);
//     console.log(data);
// }

// createUser();