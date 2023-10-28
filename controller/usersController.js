const User = require('../models/user')

class Controller {
    static getAllUsers(_, res, next) {
    //     Users.getAllUsers((err, users) => {
    //         if(err) next(err)
    //         else res.status(200).json(users);
    //     });
    }

    static registerUser(req, res, next) {
    //     console.log('masuk regist user')
    //     Users.registerUser(req, (err, result) => {
    //         if(err) next({ name: 'AuthError'})
    //         else res.status(200).json({ message: 'user registered successfully', result });
    //     });
    }

    static loginUser(req, res, next) {
    //     Users.loginUser(req, (err, result) => {
    //         if(err) next({ name: 'AuthError'})
    //         else res.status(200).json({ message: 'user login successfully', result });
    //     });
    }
}

module.exports = Controller;