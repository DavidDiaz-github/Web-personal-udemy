const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "dD90sR89lDR1718Mar07";


exports.createAccessToken = function(user) {
    const payLoad = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    };
    return jwt.encode(payLoad, SECRET_KEY);
};


exports.createRefreshToken = function(user) {
    const payLoad = {
        id: user._id,
        exp: moment().add(30, "days").unix()
    };
    return jwt.encode(payLoad, SECRET_KEY);
};

exports.decodedToken = function(token) {
    return jwt.decode(token, SECRET_KEY, true);
};