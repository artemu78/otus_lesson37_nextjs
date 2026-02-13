import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyUser } from "./db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email (мыло)", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const isValid = await verifyUser(credentials.email, credentials.password);
        
        if (isValid) {
          return { id: "1", email: credentials.email, name: credentials.email.split('@')[0] };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },

};
