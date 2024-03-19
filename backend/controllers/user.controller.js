import User from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const name = req.query.name;

    let query = { _id: { $ne: loggedInUserId } };

    // If name is provided, add the name search criteria
    if (name) {
      query.$or = [
        { name: { $regex: name, $options: "i" } }, // Case-insensitive regex search for name
        { username: { $regex: name, $options: "i" } }, // Case-insensitive regex search for username
      ];
    }

    const filteredUsers = await User.find(query).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getUsersForSidebar,
};
