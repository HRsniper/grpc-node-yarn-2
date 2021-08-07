// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateUserResponse(arg) {
  if (!(arg instanceof user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserResponse(buffer_arg) {
  return user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteUserRequest(arg) {
  if (!(arg instanceof user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteUserRequest(buffer_arg) {
  return user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateUserRequest(arg) {
  if (!(arg instanceof user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateUserRequest(buffer_arg) {
  return user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateUserResponse(arg) {
  if (!(arg instanceof user_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateUserResponse(buffer_arg) {
  return user_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_GetUserRequest,
    requestDeserialize: deserialize_GetUserRequest,
    responseSerialize: serialize_GetUserResponse,
    responseDeserialize: deserialize_GetUserResponse,
  },
  createUser: {
    path: '/UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.CreateUserResponse,
    requestSerialize: serialize_CreateUserRequest,
    requestDeserialize: deserialize_CreateUserRequest,
    responseSerialize: serialize_CreateUserResponse,
    responseDeserialize: deserialize_CreateUserResponse,
  },
  updateUser: {
    path: '/UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateUserRequest,
    responseType: user_pb.UpdateUserResponse,
    requestSerialize: serialize_UpdateUserRequest,
    requestDeserialize: deserialize_UpdateUserRequest,
    responseSerialize: serialize_UpdateUserResponse,
    responseDeserialize: deserialize_UpdateUserResponse,
  },
  deleteUser: {
    path: '/UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_DeleteUserRequest,
    requestDeserialize: deserialize_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
