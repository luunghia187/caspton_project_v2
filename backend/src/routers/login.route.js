module.exports = function (router) {
    var loginController = require('../controllers/login.controller');

    router.post("/login", loginController.logIn);
}