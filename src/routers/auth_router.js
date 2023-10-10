const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const validatorMiddleware = require("../middlewares/validation_middleware");
const authMiddleware = require("../middlewares/auth_middleware");
const guideController = require("../controllers/guide_controller");
router.post("/", guideController.addnewPerson);
router.get("/", guideController.openpersonpage);
router.get("/delete", guideController.deletePerson);
router.get("/edit", guideController.editPerson);
router.post("/edit", guideController.posteditPerson);

router.get("/login", authController.loginFormunuGoster);
router.get("/signup", authController.registerFormunuGoster);
router.post("/login", authController.login);
router.post("/signup", authController.register);
module.exports = router;
