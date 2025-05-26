import mongoose, { model, Schema } from "mongoose";
import { string } from "zod";

mongoose.connect("mongodb+srv://chouhanrahul1999:rahul1999@cluster0.uncus.mongodb.net/brainly")

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 10,
        validate: {
            validator: function (value: string) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/.test(value);
            },
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        }

    }
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    type:String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', require: true },

})

export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true},
})
export const LinkModel = model("Links", LinkSchema);