const { verifyToken } = require('../helpers/jwt')
const pool = require('../config/db');

module.exports = {
    authenticate: async function (req, res, next) {  
        try {
            const accessToken = req.headers.access_token

            const decoded = verifyToken(accessToken)

            const checkUser = await pool.query(`SELECT * from users WHERE email = '${decoded.email}' AND password = '${decoded.password}'`);

            if(checkUser) {
                req.role = checkUser.rows[0].role;
                next()
            } else {
                next({name: 'SignInError'})
            }
        } catch (err) {
            next(err)
        }
    },
    authorize: async function (req, res, next)  {
        try {
            const isSupervisor = req.role === 'Supervisor'
    
            if(!isSupervisor) {
                throw new Error;
            } else {
                next();
            }
        } catch (err) {
            next({name: 'Unauthorize'})
        }
    }
}