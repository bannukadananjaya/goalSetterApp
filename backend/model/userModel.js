const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a eamil"],
      unique: true,
    },
    // address:{
    //     type:String,
    //     required:true
    // },
    password: {
      type: String,
      required: [true, "Please Enter a password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
