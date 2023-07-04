const controller = require("../access/controller/attendnace_controller");
const router = require("express").Router();

router.get("/", controller.getAllAttendance);

module.exports = router;
