import Credentials from "next-auth/providers/credentials";
import { signIn } from "../_services/axios/AuthApi";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        // data from my login page
        const { email, password } = credentials;

        return signIn({
          email: email,
          password: password
        });
      },
    }),
    // ..add more providers if needed
  ],
  pages: {
    signIn: "/auth/signin",
  }
}