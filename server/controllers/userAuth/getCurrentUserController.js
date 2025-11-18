

export const getCurrentUser = async(req,res)=>{
res.status(200).json({
    success:true,
    message:"user found successfully",
    user:req.user
})
}