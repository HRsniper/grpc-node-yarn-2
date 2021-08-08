"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_js_1 = require("@grpc/grpc-js");
var empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
var users_grpc_pb_1 = require("./pb/users_grpc_pb");
var user_grpc_pb_1 = require("./pb/user_grpc_pb");
var user_pb_1 = require("./pb/user_pb");
var clientUser = new user_grpc_pb_1.UserServiceClient("127.0.0.1:50051", grpc_js_1.ChannelCredentials.createInsecure());
var clientUsers = new users_grpc_pb_1.UsersServiceClient("127.0.0.1:50051", grpc_js_1.ChannelCredentials.createInsecure());
clientUser.getUser(new user_pb_1.GetUserRequest().setId(1), function (_err, response) {
    console.log("GET", response.toObject());
});
clientUser.createUser(new user_pb_1.CreateUserRequest().setEmail("email@email1.com").setName("hercules1"), function (_, response) {
    console.log("CREATE", response.toObject());
});
clientUser.updateUser(new user_pb_1.UpdateUserRequest()
    .setOldemail("email@email1.com")
    .setNewemail("email@email.com.br")
    .setOldname("hercules1")
    .setNewname("Hercules R."), function (_, response) {
    console.log("UPDATE", response.toObject());
});
clientUser.deleteUser(new user_pb_1.DeleteUserRequest().setId(1), function (_, response) {
    console.log("DELETE", response.toObject());
});
clientUsers.listUsers(new empty_pb_1.Empty(), function (_err, response) {
    console.log("LIST USERS", response.toObject());
});
