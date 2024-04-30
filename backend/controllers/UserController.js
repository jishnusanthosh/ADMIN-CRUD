import UserModels from "../models/User.js";
const CreateUser = async (req, res) => {
  console.log(req.body);
  try {
    const { firstname, lastname, email, phone } = req.body;

    const NewUser = new UserModels({
      firstname,
      lastname,
      email,
      phone,
    });
    await NewUser.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully", NewUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not created, internal server error",
    });
  }
};
const GetUsers = async (req, res) => {
  try {
    const users = await UserModels.find();
    if (!users) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "User not found " });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const updatedUser = await UserModels.findByIdAndUpdate(userID, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "User Updated Successfully ",
        updatedUser,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "User not found " });
  }
};

const deleteUser=async(req, res) => {
  try {
    let userId=req.params.id;
    //checking if the user is already deleted
    const deleteUser=await UserModels.findByIdAndDelete(userId)
    if(!deleteUser){
        return res.status(400).json({success:false,message:"User Not Found"})
    }

    res.status(200).json({success:true,message:"User Deleted Successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "User not found " });
  }

}
export { CreateUser, GetUsers, UpdateUser,deleteUser };
