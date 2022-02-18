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
        res.json({
            message: error.message
        })
    }
}

// updateUser Function For Updating The Profile. Saves The Changes Back To DB As Well.
module.exports.updateUser = async function updateUser(req, res) {
    try {
        
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

// deleteUser Function For Deleting The Profile. Removes The Data From DB As Well.
module.exports.deleteUser=async function deleteUser(req,res){
    try {
        
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

// getAllUser Function: Available To Admin Only. Admin Will Be Able To See All The LogedIn User So Far.
module.exports.getAllUser=async function getAllUser(req,res){
    try {
        
    } catch (error) {
        res.json({
            message:error.message
        })
    }
}
