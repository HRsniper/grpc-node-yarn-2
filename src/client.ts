import { ChannelCredentials } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import fs from "fs";
import { UsersServiceClient } from "./pb/users_grpc_pb";
import { UserServiceClient } from "./pb/user_grpc_pb";
import { CreateUserRequest, DeleteUserRequest, GetUserRequest, UpdateUserRequest } from "./pb/user_pb";

const rootCerts = fs.readFileSync("./certs/ca.crt");
const cert_chain = fs.readFileSync("./certs/client.crt");
const private_key = fs.readFileSync("./certs/client.key");
const ssl = ChannelCredentials.createSsl(rootCerts, private_key, cert_chain);

const clientUser = new UserServiceClient("localhost:50051", ssl);
const clientUsers = new UsersServiceClient("localhost:50051", ssl);

clientUser.getUser(new GetUserRequest().setId(1), (_err, response) => {
  console.log("GET", response.toObject());
});

clientUser.createUser(new CreateUserRequest().setEmail("email@email1.com").setName("hercules1"), (_, response) => {
  console.log("CREATE", response.toObject());
});

clientUser.updateUser(
  new UpdateUserRequest()
    .setOldemail("email@email1.com")
    .setNewemail("email@email.com.br")
    .setOldname("hercules1")
    .setNewname("Hercules R."),
  (_, response) => {
    console.log("UPDATE", response.toObject());
  }
);

clientUser.deleteUser(new DeleteUserRequest().setId(1), (_, response) => {
  console.log("DELETE", response.toObject());
});

clientUsers.listUsers(new Empty(), (_err, response) => {
  console.log("LIST USERS", response.toObject());
});
