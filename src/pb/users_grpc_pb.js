// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var user_pb = require('./user_pb.js');

function serialize_ListUsersResponse(arg) {
  if (!(arg instanceof users_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListUsersResponse(buffer_arg) {
  return users_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var UsersServiceService = exports.UsersServiceService = {
  listUsers: {
    path: '/UsersService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: users_pb.ListUsersResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ListUsersResponse,
    responseDeserialize: deserialize_ListUsersResponse,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
