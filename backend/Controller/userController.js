const userModel = require('../Models/userModel');

// getUser Function For Fetching The User Deatils From DB.
module.exports.getUser = async function getUser(req, res) {
    try {
        let userID = req.id;
        let user = await userModel.findById(userID);

        if (user) {
            return res.json(user);
        } else {
            return res.json({
                message: "User Don't Exist"
            })
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

// updateUser Function For Updating The Profile. Saves The Changes Back To DB As Well.
module.exports.updateUser = async function updateUser(req, res) {
    try {
        let userId=req.params.id;
        let user=await userModel.findById(userId);

        if(!user){
            res.json({
                message: 'User Not Found'
            });
        }else{
            let infoUpdate=req.body;
            for(let key in infoUpdate){
                user[key]=infoUpdate[key];
            }

            user.confirmPassword=user.password;
            let updateUserData=await user.save();

            return res.json({
                message: 'Data Updated Successfully',
                data: updateUserData
            })
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

// deleteUser Function For Deleting The Profile. Removes The Data From DB As Well.
module.exports.deleteUser=async function deleteUser(req,res){
    try {
        let userId=req.params.id;
        let user=await userModel.findByIdAndDelete(userId);

        if(user){
            return res.json({
                message: 'Data Deleted Successfully'
            })
        }else{
            return res.json({
                message: 'User Not Found, Kindly Login First'
            })
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

// getAllUser Function: Available To Admin Only. Admin Will Be Able To See All The LogedIn User So Far.
module.exports.getAllUser=async function getAllUser(req,res){
    try {
        console.log(req);
        let allUsers=await userModel.find();

        if(allUsers){
            return res.json({
                message: 'All Users Fetched Successfully',
                data: allUsers
            });
        }else{
            return res.json({
                message: 'No Users Found'
            })
        }
    } catch (error) {
        return res.json({
            message:error.message,
        })
    }
}

// uploadProfileImage Function: Uploades User's Profile Image In DB 
module.exports.uploadProfileImage=async function uploadProfileImage(req,res){
    try {
        
    } catch (error) {
        return res.json({
            message: error
        })
    }
}