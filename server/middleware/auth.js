const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const AdminController = require("../models/admin");
const ErrorHandler = require("../utils/errorHandler");
// Checks if user is authenticated or not.
exports.isAuthenticated = catchAsyncError(async (req,res,next)=>{
    const token = req.headers.token;
   
     
    if(!token){
        return next(new ErrorHandler('Login first to access this resource.'));
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    
    req.admin = await AdminController.findById(decoded.id);
    next();
})

