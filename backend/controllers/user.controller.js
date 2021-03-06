const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req,res,next) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err,doc) => {
        if(!err)
            res.send(doc);
    });
}