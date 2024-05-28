import { Router } from "express";
import * as UC from './user.controller.js';
// &==========================================================================
const router = Router();
// &==========================================================================

// router.get("/",UC.getUsers)
router.post("/",UC.signUp)
router.get("/login/:id",UC.logIn)
router.get("/",UC.logOut)
router.get("/:userId/posts/:postsId",UC.specialEndpoint)

// &==========================================================================

export default router;
