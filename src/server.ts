import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { promisify } from "util";
import { IUserServiceServer, UserServiceService } from "./pb/user_grpc_pb";
import {
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  GetUserRequest,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  User
} from "./pb/user_pb";

const users: User.AsObject[] = [
  { id: 1, name: "Nome 1", email: "Email 1" },
  { id: 2, name: "Nome 2", email: "Email 2" },
  { id: 3, name: "Nome 3", email: "Email 3" }
];

const UserServer = (): IUserServiceServer => {
  const getUser = (
    call: ServerUnaryCall<GetUserRequest, GetUserResponse>,
    callback: sendUnaryData<GetUserResponse>
  ) => {
    const id = call.request.getId();
    // console.log({ id });

    const foundUser = users.find((user) => user.id === id);
    console.table(foundUser);

    if (!foundUser) {
      return callback(new Error("User not found"), null);
    }

    const response = new GetUserResponse();
    response.setUser(new User().setId(foundUser.id).setName(foundUser.name).setEmail(foundUser.email));

    return callback(null, response);
  };

  const createUser = (
    call: ServerUnaryCall<CreateUserRequest, CreateUserResponse>,
    callback: sendUnaryData<CreateUserResponse>
  ) => {
    const id = users.length + 1;
    const email = call.request.getEmail();
    const name = call.request.getName();
    // console.log({ email, name });

    if (!email || !name) {
      return callback(new Error("User can't by created"), null);
    }

    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      return callback(new Error("User already exists"), null);
    }

    const response = new CreateUserResponse();
    response.setUser(new User().setId(id).setName(name).setEmail(email));

    users.push({ id, name, email });
    console.table(users);

    return callback(null, response);
  };

  const updateUser = (
    call: ServerUnaryCall<UpdateUserRequest, UpdateUserResponse>,
    callback: sendUnaryData<UpdateUserResponse>
  ) => {
    const oldEmail = call.request.getOldemail();
    const oldName = call.request.getOldname();
    const newEmail = call.request.getNewemail();
    const newName = call.request.getNewname();
    // console.log({ oldEmail, newEmail, oldName, newName });

    if (!oldEmail || !oldName) {
      return callback(new Error("User can't by update"), null);
    }

    const foundUser = users.find((user) => user.email === oldEmail);
    // console.table(foundUser);

    if (!foundUser) {
      return callback(new Error("User not found"), null);
    }

    const response = new UpdateUserResponse();
    response.setUser(
      new User()
        .setId(foundUser.id)
        .setName(newName ? newName : oldName)
        .setEmail(newEmail ? newEmail : oldEmail)
    );

    users.map((user) => {
      if (user.email === oldEmail) {
        user.email = newEmail ? newEmail : oldEmail;
        user.name = newName ? newName : oldName;
      }
    });
    console.table(users);

    return callback(null, response);
  };

  const deleteUser = (call: ServerUnaryCall<DeleteUserRequest, DeleteUserRequest>, callback: sendUnaryData<Empty>) => {
    const id = call.request.getId();
    // console.log({ id });

    const foundUser = users.find((user) => user.id === id);
    console.table(foundUser);

    if (!foundUser) {
      return callback(new Error("User not found"), null);
    }

    const response = new Empty();

    users.map((user) => {
      if (user.id === id) {
        users.splice(users.indexOf(user), 1);
      }
    });
    console.table(users);

    return callback(null, response);
  };

  return {
    getUser,
    createUser,
    updateUser,
    deleteUser
  };
};

const server = new Server();
server.addService(UserServiceService, UserServer());

// utilizamos o .bind(server) porque o método start() possui uma checagem
// para saber se o servidor já foi inicializado chamando this.started = true/false
const serverBindPromise = promisify(server.bindAsync).bind(server);
serverBindPromise("127.0.0.1:50051", ServerCredentials.createInsecure())
  .then((port) => {
    server.start();
    console.log("\x1b[0;31mServer started\x1b[0m, listening on \x1b[0;32m" + port + "\x1b[0m");
  })
  .catch((error) => {
    console.error("\x1b[0;31mServer error\x1b[0m: " + error.message);
  });
