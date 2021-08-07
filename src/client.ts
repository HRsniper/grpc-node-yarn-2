import { ChannelCredentials } from "@grpc/grpc-js";
import { UserServiceClient } from "./pb/user_grpc_pb";
import {
  GetUserRequest
} from "./pb/user_pb";


const client = new UserServiceClient(
  "127.0.0.1:50051",
  ChannelCredentials.createInsecure()
);

client.getUser(new GetUserRequest().setId(1), (_, response) => {
  console.log(response.toObject());
});
