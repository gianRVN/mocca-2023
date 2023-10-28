const jwt = require('jsonwebtoken');

/* STEPNYA
1. GENERATE TOKEN --->  Token di generate dari email dan passeword hasil login. Outputnya token
2. VERIFIKASI TOKEN --> Setiap mau akses API, token nya perlu di verifikasi, kalau valid, ya API bisa di akses
*/

module.exports = {
    generateToken: (payload) => {
        return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    },
    verifyToken: (payload) => {
        return jwt.verify(payload, process.env.JWT_SECRET_KEY)
    }
}
