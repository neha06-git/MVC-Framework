const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add user name"],
    },
    email: {
        type: String,
        required: [true, "Please add email address"],
        unique: [true, "This Email address is already used"]
    },
    password: {
        type: String,
        required: [true, "Please add user password"],
    },

},{
    timestamps: true,
}

);

module.exports = mongoose.model("User", userSchema);