import { chatClient } from "../lib/stream.js"

export const getStreamToken = async(req,res) =>{
    try {
    //use clerkId for Stream (not mongodb _id)=> it should match the id used when creating/upserting the user in Stream (which is clerkId)

        const token = chatClient.createToken(req.user.clerkId)

        res.status(200).json
        ({
            token,
            userId:req.user.clerkId,
            name:req.user.name,
            userImage:req.user.profileImage
        })
    } catch (error) {
        console.error("Error in getStreamToken controller:", error)
        res.status(500).json({message:"Failed to generate Stream token", error: error.message})
    }
}