var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
  emailId : {
    type : String,
    required : true,
    trim : true,
    minlength : 1
  },
  password : {
    type : String,
    default : null
  }
});

module.exports = { Users };
