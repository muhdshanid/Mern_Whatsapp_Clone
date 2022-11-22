import express from "express";
import { getConversation, newConversation } from "../controllers/conversation-controller.js";
import { getImage, uploadFile } from "../controllers/image-controller.js";
import { getMessages, newMessage } from "../controllers/message-controller.js";
import { addUser, getUsers } from "../controllers/user-controllers.js";
import upload from "../utils/upload.js";
const router = express.Router()

router.post("/add",addUser)
router.get("/users",getUsers)
router.post("/conversation/add",newConversation)
router.post("/conversation/get",getConversation)
router.post("/message/add",newMessage)
router.get("/message/get/:id",getMessages)
router.post("/file/upload",upload.single("file"),uploadFile)
router.get("/file/:filename",getImage)

export default router