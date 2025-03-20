// user.route.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");  // แก้เป็นเส้นทางที่ถูกต้อง

// เส้นทางต่าง ๆ
router.post("/create", userController.createUser);
router.get("/login/:userName/:userPassword", userController.checkLogin);
router.put("/update/:userId", userController.updateUser);
router.post("/upload", userController.uploadUser);

module.exports = router;
