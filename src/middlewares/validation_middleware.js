const { body } = require("express-validator");

const validateNewUser = () => {
  return [
    body("email").trim().isEmail().withMessage("Geçerli bir mail giriniz"),

    body("companyName").trim(),

    body("sifre")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Şifre en az 6 karakter olmalı")
      .isLength({ max: 30 })
      .withMessage("Şifre en fazla 30 karakter olmalı"),
  ];
};

const validateNewPassword = () => {
  return [
    body("sifre")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Şifre en az 6 karakter olmalı")
      .isLength({ max: 20 })
      .withMessage("Şifre en fazla 20 karakter olmalı"),

    body("resifre")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.sifre) {
          throw new Error("Şifreler aynı değil");
        }
        return true;
      }),
  ];
};

const validateLogin = () => {
  return [
    body("email").trim().isEmail().withMessage("Geçerli bir mail giriniz"),

    body("sifre")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Şifre en az 6 karakter olmalı")
      .isLength({ max: 20 })
      .withMessage("Şifre en fazla 20 karakter olmalı"),
  ];
};

const validateEmail = () => {
  return [
    body("email").trim().isEmail().withMessage("Geçerli bir mail giriniz"),
  ];
};

module.exports = {
  validateNewUser,
  validateLogin,
  validateEmail,
  validateNewPassword,
};
