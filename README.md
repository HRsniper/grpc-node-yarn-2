# **gRPC** with nodejs and yarn

application made in node.js with **gRPC** server and _javascript_/_typescript_.

## Install dependencies

- ```sh
  yarn
  ```

## Compiling the protofiles

To compile the `.proto` files, you need to have [protoc](https://github.com/protocolbuffers/protobuf/releases/) installed (_it's important to add in your environment variables in the **PATH**_).

- ```sh
  yarn compile # in the root directory
  ```

### Start server

- ```sh
  yarn start
  ```

### Start client (_in another terminal_)

- ```sh
  yarn client
  ```

## Insomnia

The `Insomnia.json` file contains the **gRPC**/_HTTP2_ requests for [_Insomnia_](https://insomnia.rest/download/).

## Importing `Insomnia.json` into _Insomnia_

Click `Create ▼`, and in `IMPORT FROM`, click `File`, select the `Insomnia.json` path, click on it, and click `Import`.

A `Collection` will be created with the name _gRPC_, click on it and it will open all the requests that are in the `Insomnia.json` file.
