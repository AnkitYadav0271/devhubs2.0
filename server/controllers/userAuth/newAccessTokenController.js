import { AppError } from "../../utils/appError.js";
import jwt from "jsonwebtoken";
import UserServices from "../../services/userServices.js";

const userServices = new UserServices();

export const generateNewAccessToken = async (req, res, next) => {
  try {
    const token = req.cookies?.refreshToken;
   
    if (!token) {
      return next(new AppError("Missing Token", 404));
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      if (error.name === "tokenExpireError") {
        return next(new AppError("Token expired please login again", 403));
      }
      return next(new AppError(error.message));
    }

    let user = await userServices.getUser(decoded.id);
    if(!user){
        return next(new AppError("user not found",404));
    }
    console.log(user);
    let newAccessToken = jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"30d"});
    user.accessToken = newAccessToken;
    await user.save();
     res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        success:true,
        message:"New Access Token generated successfully",
        accessToken:newAccessToken
    })

  } catch (error) {
    return next(new AppError(error.message));
  }
};
