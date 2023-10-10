const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const validatorMiddleware = require("../middlewares/validation_middleware");
const authMiddleware = require("../middlewares/auth_middleware");
const guideController = require("../controllers/guide_controller");
router.post("/", authMiddleware.oturumAcilmis, guideController.addnewPerson);
router.get("/", authMiddleware.oturumAcilmis, guideController.openpersonpage);
router.get(
  "/delete",
  authMiddleware.oturumAcilmis,
  guideController.deletePerson
);
router.get("/edit", authMiddleware.oturumAcilmis, guideController.editPerson);
router.post(
  "/edit",
  authMiddleware.oturumAcilmis,
  guideController.posteditPerson
);

router.get(
  "/login",
  authMiddleware.oturumAcilmamis,
  authController.loginFormunuGoster
);
router.get(
  "/signup",
  authMiddleware.oturumAcilmamis,
  authController.registerFormunuGoster
);
router.post(
  "/login",
  authMiddleware.oturumAcilmamis,
  validatorMiddleware.validateLogin(),
  authController.login
);
router.post(
  "/signup",
  authMiddleware.oturumAcilmamis,
  validatorMiddleware.validateNewUser(),
  authController.register
);
router.get("/verify", authController.verifyMail);
router.get("/logout", authMiddleware.oturumAcilmis, authController.logout);

module.exports = router;
