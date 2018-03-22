"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'pablo@com.br': new User('Pablo', 'pablo@com.br', '123456'),
    'Alex@com.br': new User('Alex', 'alex@com.br', '123'),
    'Eli@com.br': new User('Eli', 'eli@com.br', '1234')
};
