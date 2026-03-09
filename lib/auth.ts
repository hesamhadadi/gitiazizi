import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (credentials?.password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "Giti Azizi", email: "azizigiti81@gmail.com" };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/admin-auth" },
  secret: process.env.NEXTAUTH_SECRET,
};
