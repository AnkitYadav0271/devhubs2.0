import mongoose from "mongoose";
import { Schema } from "mongoose";

const projectListingSchema = new Schema({
     project_Title : {
        type : String,
        required : [true, "Project Title is required"],
        trim : true,
        minLength : [3, "Project Title should be more than 3 chars"],
        maxLength : [100, "Project Title should be less than 100 chars"],
     }, 
     project_Starting_Bid : {
        type : Number,
        required : [true , "Project Starting Bid is required"],
        min : [100, "Project Starting Bid should be more than 100"],
     }, 
     project_Starting_Date : {
        type : Date,
        required : [true, "Project Starting Date is required"],
     }, 
     project_Ending_Date : {
        type : Date,
        required : [true, "Project Ending Date is required"],
     }, 
     Number_of_Contributors : {
        type : Number , 
        default : 0,
        min : [0, "Number of Contributors should be more than 0"],
        max : [100, "Number of Contributors should be less than 100"],
     }, 
     project_Technology_Stack : {
        type : [String], 
        required : [true, "Project Technology Stack is required"],
     }, 
     project_Category : {
        type : String , 
        required : [true, "Project Category is required"],
        enum : ["Free project" , "Funded project" , "capsulated project"], 
     }, 
     project_Description : {
        type : String , 
        required : [true, "Project Description is required"],
        trim : true,
        minLength : [10, "Project Description should be more than 10 chars"],
        maxLength : [1000, "Project Description should be less than 1000 chars"],
     }, 
     project_Key_Features : {
        type : [{
            type: String,
            trim: true,
            minLength: [10, "Each feature should be more than 10 chars"],
            maxLength: [1000, "Each feature should be less than 1000 chars"]
        }], 
        required : [true, "Project Key Features is required"],
     }, 
     project_Status : {
        type : String , 
        required : [true, "Project Status is required"],
        enum : ["Active" , "Inactive" , "Completed"], 
     }, 
     project_Ideal_Member_looking_For : {
        type : [{
            type: String,
            trim: true,
            minLength: [10, "Each member description should be more than 10 chars"],
            maxLength: [1000, "Each member description should be less than 1000 chars"]
        }], 
        required : [true, "Project Ideal Member looking For is required"],
     }, 
    project_github_Repository_Link : {
        type : String,
        required : [true, "Project Github Repository Link is required"],
     }, 
     project_Cover_Image : {
        type : String,
        required : [true, "Project Cover Image is required"],
     }, 
     project_Bonus_Per_Contributor : {
        type : Number , 
        default : 0, 
        min : [0, "Project Bonus Per Contributor should be more than 0"],
     }, 

    })

    export const ProjectListing = mongoose.model("ProjectListing", projectListingSchema); 