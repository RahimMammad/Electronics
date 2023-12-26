import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, maxLength: 255 },
        password: { type: String, required: true, maxLength: 255 }
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);