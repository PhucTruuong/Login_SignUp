import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
        },
        password: String
    },
    {
        collection: "User",
    }
)

const UserModel = mongoose.model("User", userSchema);

export default UserModel;