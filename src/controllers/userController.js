import userService from '../services/userService.js';

export const userProfile = async (req, res) => {
	try {
        const userProfile = req.params.userId;
        await userService.getUserProfile(userProfile)
        return res.status(200).json({message:'User profile retrieved successfully', data: userProfile});
    } catch (error) {
        console.error("User Profile Error: ",error)
    }
};