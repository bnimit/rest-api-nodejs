import express from "express";
import controller from "../controllers/posts";

const router = express.Router();

router.get("/api/v1/posts", controller.getAllPosts);
router.get("/api/v1/posts/:id", controller.getPost);
router.put("/api/v1/posts/:id", controller.updatePost);
router.delete("/api/v1/posts/:id", controller.deletePost);
router.post("api/v1/posts", controller.addPost);

export default router;
