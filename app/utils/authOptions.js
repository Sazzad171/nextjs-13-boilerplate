import Credentials from "next-auth/providers/credentials";
import { signIn } from "../_services/axios/AuthApi";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
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
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     user && (token.user = user);
  //     return token;
  //   },
  //   session: async ({ session, token }) => {
  //     session.user = token.user;  // Setting token in session
  //     return session;
  //   },
  // },
  pages: {
    signIn: "/auth/signin",
  }
}