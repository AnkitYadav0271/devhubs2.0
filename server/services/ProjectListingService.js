  import ProjectListingRepository from "../repositories/ProjectListingRepository.js";

  class ProjectListingService {
    constructor() {
        this.projectListingRepo = new ProjectListingRepository();
    }
    async createProjectListing (projectListing) {
        return await this.projectListingRepo.createProjectListing(projectListing);
    }
    async getProjectListingById (id) {
        return await this.projectListingRepo.getProjectListingById(id);
    }
    async updateProjectListing (id, projectListing) {
        return await this.projectListingRepo.updateProjectListing(id, projectListing);
    }
    async deleteProjectListing (id) {
        return await this.projectListingRepo.deleteProjectListing(id);
    }
  }

  export default ProjectListingService;  