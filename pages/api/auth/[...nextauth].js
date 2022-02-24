import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  //   secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: "",
    //   from: "",
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
