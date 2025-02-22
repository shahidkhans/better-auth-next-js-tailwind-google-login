import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  //...
  database: new Database("./sqlite.db"),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders:{
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		},
    }
});
