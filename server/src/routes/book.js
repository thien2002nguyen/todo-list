import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdminOrModerator } from "../middlewares/verify_roles";
const router = express.Router();

//PUBLIC ROUTES
router.get("/", controllers.getBooks);

//PRIVATE ROUTES
router.use(verifyToken);
router.use(isAdminOrModerator);
router.post("/", controllers.createNewBook);
router.put("/", controllers.updateBook);
router.delete("/", controllers.deleteBook);

module.exports = router;
