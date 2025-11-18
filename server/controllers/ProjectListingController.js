import ProjectListingService from "../services/ProjectListingService.js";

const projectListingService = new ProjectListingService();

export const createProjectListing = async (req, res) => {
  try {
    const {
      project_Title,
      project_Starting_Bid,
      project_Starting_Date,
      project_Ending_Date,
      Number_of_Contributors,
      project_Technology_Stack,
      project_Category,
      project_Description,
      project_Key_Features,
      project_Status,
      project_Ideal_Member_looking_For,
      project_github_Repository_Link,
      project_Cover_Image,
      project_Bonus_Per_Contributor,
    } = req.body;

    if (
      !project_Title ||
      !project_Starting_Bid ||
      !project_Starting_Date ||
      !project_Ending_Date ||
      !Number_of_Contributors ||
      !project_Technology_Stack ||
      !project_Category ||
      !project_Description ||
      !project_Key_Features ||
      !project_Status ||
      !project_Ideal_Member_looking_For ||
      !project_github_Repository_Link ||
      !project_Cover_Image ||
      !project_Bonus_Per_Contributor
    ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
            error: "All fields are required",
        })
    }
    const project = await projectListingService.createProjectListing(req.body);
    if (!project) {
        return res.status(400).json({
            success: false,
            message: "Project not created",
            error: "Project not created",
        })
    }
    return res.status(200).json({
        success: true,
        message: "Project created successfully",
        project: project,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
