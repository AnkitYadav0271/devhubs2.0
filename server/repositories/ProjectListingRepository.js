 import { ProjectListing } from "../models/projectListingSchema.js";

 class ProjectListingRepository {
     async createProjectListing (projectListing) {
        return await ProjectListing.create(projectListing);
     }
     async getProjectListingById (id) {
        return await ProjectListing.findById(id);
     }
     async updateProjectListing (id, projectListing) {
        return await ProjectListing.findByIdAndUpdate(id, projectListing);
     }
     async deleteProjectListing (id) {
        return await ProjectListing.findByIdAndDelete(id);
     }
    }

    export default ProjectListingRepository; 