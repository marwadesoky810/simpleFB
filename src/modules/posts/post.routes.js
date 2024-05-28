import { Router } from "express";
import * as PC from "./post.controller.js";
// &==========================================================================
const router = Router();
// &==========================================================================

router.get("/",PC.getPosts)
router.post("/",PC.addPosts)
router.put("/:id",PC.updatePost)
router.delete("/:id",PC.deletePost)
router.get("/:postId",PC.getPostWithAuther)

// &==========================================================================

export default router ;