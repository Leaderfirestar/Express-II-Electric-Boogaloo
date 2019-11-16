exports.show_login = function(req, res, next){
  res.render('user/login',  {formData: {}, errors: {}});
}

exports.show_login = function(req, res, next){
  res.render('user/signup', {formData: {}, errors: {}});
}