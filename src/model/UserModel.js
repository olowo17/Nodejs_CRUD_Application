import mongoose from "mongoose";

// Creation of schema
const UserSchema = new mongoose.Schema({
    rollno: Number,
    name: String,
  });

  const UserModel = mongoose.model("students", UserSchema);

  export default UserModel