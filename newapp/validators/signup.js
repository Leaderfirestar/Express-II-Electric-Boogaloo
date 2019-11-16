let validator = require('validator');
let models = require("../models");
const validateCreateUserFields = function(errors, req){
  if (!validator.isEmail(req.body.email)){
    errors["email"] = "Please use a vaild email";
  }
  if (!validator.isAscii(req.body.password)){
    errors["password"] = "Please use Ascii characters only";
  }
  if (!validator.isLength(req.body.password, {min: 8, max: 25})){
    errors["password" = "Minimum of 8 characters, max of 25";
  }
}

exports.validateUser = function (errors, req){
  return new Promise(function(resolve, reject){
    validateCreateUserFields(erros, req);
    return model.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(u =>{
      if (u !==null){
        errors["email"] = "Email already in use";
      }
      resolve(errors);
    })
  })
}