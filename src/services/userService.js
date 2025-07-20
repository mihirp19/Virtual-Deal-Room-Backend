import mongoose from "mongoose"

export async function getUserProfile(userId) {
    const userProfile = await mongoose.model('User').findById(userId);
    if(!userProfile) {
        throw new Error("User not found");
    }
    return userProfile;
}