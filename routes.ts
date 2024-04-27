// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from "@edgio/core";

export default new Router()
  .always({
    origin: {
      set_origin: "edgio_serverless",
    },
  })
  .static("build/client");
