import { Router } from "express";
import { loginUser } from "../controllers/userAuth/loginController.js";
import { rateLimit } from "../middleware/auth/rateLimitMiddleware.js";
import { isAuthenticated } from "../middleware/auth/isAuthenticatedMiddleware.js";
import { logoutUser } from "../controllers/userAuth/logoutController.js";
import { generateNewAccessToken } from "../controllers/userAuth/newAccessTokenController.js";
import { getCurrentUser } from "../controllers/userAuth/getCurrentUserController.js";

const router = Router({ mergeParams: true });

router.post("/login",rateLimit({limit:10,timer:60,key:"login"}) ,loginUser);
router.post("/logout",isAuthenticated ,logoutUser);
router.post("/refresh",generateNewAccessToken);
router.get("/me",isAuthenticated,getCurrentUser);

export default router;
