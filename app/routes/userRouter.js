const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router()



userRouter.post("/login", userController.login);


userRouter.post("/refresh", userController.refresh);


userRouter.post("/logout", userController.logout);


userRouter.get("/profile",userController.profile);


userRouter.get("/adminpanel",userController.adminPanel);




module.exports = userRouter;