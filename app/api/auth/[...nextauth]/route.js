import { login } from "@/db/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { mobile, password } = credentials;

        try {
          const user = await login( mobile, password );

          if (!user) {
            return null;
          }

          return user;

        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    // jwt start and then seession
    async jwt({ token, user, session }) {
      if (user){
        return{
          ...token,id:user.id,phone:user.phone,avatar:user.avatar,role:user.role
        }
      }
      return token;
    },
    async session({  session,token, user }) {
      return{
        ...session,user:{
          ...session.user,
          id:token.id,
          avatar:token.avatar,
          phone:token.phone,
          role:token.role
        }
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
