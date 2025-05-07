import { authjsPlugin } from "payload-authjs";
import { authConfig } from "./auth.config";
import { Plugin } from "payload";

const config: Plugin = authjsPlugin({ authjsConfig: authConfig })

export default config;