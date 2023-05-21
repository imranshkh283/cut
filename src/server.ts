// import {Constant, Errors, FoldersAndFiles} from "./app/constants"
// import socketIo from "socket.io"

import { DB } from "./configs/DB";
// @ts-ignore
import server from "./app/app";

server.listen(4000, async () => {
  console.log("*************                           *************");
  console.log("*************       App started...      *************");
  console.log("*************                           *************");
  await DB();

  //  console.clear()
  //  })
  //  .catch(err => {
  //     console.log(Errors.SERVER_RUNTIME_ERROR);
  //     console.log(err);
  //     console.log(Errors.TERMINATE_SERVER_PROCESS);
  //     process.exit(1);
  // });
  process.on("SIGINT", () => {
    console.log("terminating");
    process.exit(0);
  });

  process.on("close", () => {
    console.log("Unexpected server shutdown");
  });
});
