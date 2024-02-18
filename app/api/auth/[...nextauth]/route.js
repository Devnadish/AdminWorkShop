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
          const user = await login("123","123");
          // const user = await login(mobile, password);

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
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          phone: user.phone,
          avatar: user.avatar,
          role: user.role,
        };
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          avatar: token.avatar,
          phone: token.phone,
          role: token.role,
        },
      };
    },

    // async signIn(user, account, profile) {
    //   return "/dashboard/dashboard"; // Redirect to the dashboard page after successful login
    // },
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
