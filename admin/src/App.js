import React from "react";
import { HydraAdmin } from "@api-platform/admin";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/api"
    : "https://saint-jacques.herokuapp.com/api";

export default () => <HydraAdmin entrypoint={apiUrl} />;
