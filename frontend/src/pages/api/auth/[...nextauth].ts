import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  //The callback is called whenever a JSON Web Token is created or updated. The returned value will be
  //encrypted and it is stored in a cookie.
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
    async jwt({token, account}) {
      if(account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  }
});
