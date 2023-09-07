import Credentials from "next-auth/providers/credentials";
import { signIn } from "../_services/axios/AuthApi";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

   // callback for set custom token and other info to session
   callbacks: {
    jwt: async ({ token, user }) => {

      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {

      if (session !== null) {
        session.user = token.user;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        // data from my login page
        const { email, password } = credentials;

        // return signIn({
        //   email: email,
        //   password: password
        // });

        if (typeof credentials !== "undefined") {
          console.log(credentials);
          const res = await signIn({
            email: credentials.email,
            password: credentials.password
          });
          console.log("user info res:", res);
          if (typeof res !== "undefined") {
            console.log("user info:", res);
            // console.log("token", res?.data.data.token);
            return { ...res, apiToken: res?.token }
          } else {
            return null
          }
        } else {
          return null
        }
      },
    }),
    // ..add more providers if needed
  ],
  pages: {
    signIn: "/auth/signin",
  }
}