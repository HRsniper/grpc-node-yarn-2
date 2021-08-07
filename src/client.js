"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_js_1 = require("@grpc/grpc-js");
var user_grpc_pb_1 = require("./pb/user_grpc_pb");
var user_pb_1 = require("./pb/user_pb");
var client = new user_grpc_pb_1.UserServiceClient("127.0.0.1:50051", grpc_js_1.ChannelCredentials.createInsecure());
client.getUser(new user_pb_1.GetUserRequest().setId(1), function (_, response) {
    console.log(response.toObject());
});
