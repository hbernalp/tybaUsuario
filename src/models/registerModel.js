const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

// object of data type, for create the schema in the database
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "The name is Required"],
    },
    document:{
        type: Number,
        required: [true, "The number is required"],
    },
    email:{
        type: String,
        unique: true,
        required: [true, "The email is required"],
    },
    password:{
        type: Number,
        required: [true, "The password is required"]
    }

});

// Delete de key password to object, in the create a new user
userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
}
userSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser Unico'
})

module.exports = mongoose.model('User', userSchema);
