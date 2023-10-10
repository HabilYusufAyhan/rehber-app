const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    emailAktif: {
      type: Boolean,
      default: false,
    },
    sifre: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "kullanicilar", timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
