import { ChannelCredentials } from "@grpc/grpc-js";
import { UserServiceClient } from "./pb/user_grpc_pb";
import { CreateUserRequest, DeleteUserRequest, GetUserRequest, UpdateUserRequest } from "./pb/user_pb";

const client = new UserServiceClient("127.0.0.1:50051", ChannelCredentials.createInsecure());

client.getUser(new GetUserRequest().setId(1), (_, response) => {
  console.log("GET", response.toObject());
});

client.createUser(new CreateUserRequest().setEmail("email@email1.com").setName("hercules1"), (_, response) => {
  console.log("CREATE", response.toObject());
});

client.updateUser(
  new UpdateUserRequest()
    .setOldemail("email@email1.com")
    .setNewemail("email@email.com.br")
    .setOldname("hercules1")
    .setNewname("Hercules R."),
  (_, response) => {
    console.log("UPDATE", response.toObject());
  }
);

client.deleteUser(new DeleteUserRequest().setId(1), (_, response) => {
  console.log("DELETE", response.toObject());
});
