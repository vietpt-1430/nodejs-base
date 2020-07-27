var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var secret = 'secrect password'
 
var UserSchema = new mongoose.Schema(
{
  username: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  password: {
      type: String,
      required: true,
      minLength: 7
  },
  tokens: [{
      token: {
          type: String
      }
  }]
},
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
});

UserSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    token: this.generateAuthToken()
  };
};

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign(
        {
            _id: this._id,
            username: this.username
        },
        process.env.JWT_KEY
    )
    this.tokens = this.tokens.concat({token})
    this.save()

    return token
}
 
const User = mongoose.model('User', UserSchema);

module.exports = User;
