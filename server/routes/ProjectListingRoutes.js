 import { Router } from "express";
 import { createProjectListing } from "../controllers/ProjectListingController.js";
 const router = Router();
 router.post("/create-project", createProjectListing);
 export default router;
