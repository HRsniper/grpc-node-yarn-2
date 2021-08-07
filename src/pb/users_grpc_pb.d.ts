// package: 
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as users_pb from "./users_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as user_pb from "./user_pb";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUsers: IUsersServiceService_IListUsers;
}

interface IUsersServiceService_IListUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, users_pb.ListUsersResponse> {
    path: "/UsersService/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<users_pb.ListUsersResponse>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer extends grpc.UntypedServiceImplementation {
    listUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, users_pb.ListUsersResponse>;
}

export interface IUsersServiceClient {
    listUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UsersServiceClient extends grpc.Client implements IUsersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}
