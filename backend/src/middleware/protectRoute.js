import { requireAuth } from "@clerk/express";
import { clerkClient } from "@clerk/express";
import User from "../models/User.models.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [ // 👈 make sure "export const" is here
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) {
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
      }

      let user = await User.findOne({ clerkId });

      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);
        console.log("🔍 Clerk user fetched:", clerkUser); 
        user = await User.create({
          clerkId,
          name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
          email: clerkUser.emailAddresses[0].emailAddress,
          profileImage: clerkUser.imageUrl,
        });
console.log("✅ User created in MongoDB:", user);

        await upsertStreamUser({
          id: clerkId,
          name: user.name,
          image: user.profileImage,
        });
      }

      req.user = user;
      next();
    } catch (error) {
        console.error("❌ Failed to create user:", err);
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];