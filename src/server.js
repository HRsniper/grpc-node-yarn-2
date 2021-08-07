"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_js_1 = require("@grpc/grpc-js");
var empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
var util_1 = require("util");
var user_grpc_pb_1 = require("./pb/user_grpc_pb");
var user_pb_1 = require("./pb/user_pb");
var users = [
    { id: 1, name: "Nome 1", email: "Email 1" },
    { id: 2, name: "Nome 2", email: "Email 2" },
    { id: 3, name: "Nome 3", email: "Email 3" },
];
var UserServer = function () {
    var getUser = function (call, callback) {
        var id = call.request.getId();
        var foundUser = users.find(function (user) { return user.id === id; });
        if (!foundUser) {
            return callback(new Error("User not found"), null);
        }
        var response = new user_pb_1.GetUserResponse();
        response.setUser(new user_pb_1.User()
            .setId(foundUser.id)
            .setName(foundUser.name)
            .setEmail(foundUser.email));
        return callback(null, response);
    };
    var createUser = function (call, callback) {
        var id = users.length + 1;
        var email = call.request.getEmail();
        var name = call.request.getName();
        console.log({ email: email, name: name });
        // if (newUser?.getEmail() === undefined) {
        //   return callback(new Error("User can't by created"), null);
        // }
        var userExists = users.find(function (user) { return user.email === email; });
        if (userExists) {
            return callback(new Error("User already exists"), null);
        }
        var response = new user_pb_1.CreateUserResponse();
        response.setUser(new user_pb_1.User()
            .setId(id)
            .setName(name || "")
            .setEmail(email || ""));
        users.push({
            id: id,
            name: name || "",
            email: email || "",
        });
        console.table(users);
        return callback(null, response);
    };
    var updateUser = function (updateUser, callback) {
        return new user_pb_1.User();
    };
    var deleteUser = function (deleteUser, callback) {
        return new empty_pb_1.Empty();
    };
    return {
        getUser: getUser,
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
    };
};
var server = new grpc_js_1.Server();
server.addService(user_grpc_pb_1.UserServiceService, UserServer());
// utilizamos o .bind(server) porque o método start() possui uma checagem
// para saber se o servidor já foi inicializado chamando this.started = true/false
var serverBindPromise = util_1.promisify(server.bindAsync).bind(server);
serverBindPromise("127.0.0.1:50051", grpc_js_1.ServerCredentials.createInsecure())
    .then(function (port) {
    server.start();
    console.log("\x1b[0;31mServer started\x1b[0m, listening on \x1b[0;32m" +
        port +
        "\x1b[0m");
})
    .catch(function (error) {
    console.error("\x1b[0;31mServer error\x1b[0m: " + error.message);
});
