import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                // Here you can verify if the email is allowed
                // or create/update the user in your Neon database
                return true
            }
            return true // Do different verification for other providers
        },
        async session({ session, token, user }) {
            // Add custom role logic here if needed
            session.user.role = "patient"; // Default, update based on logic
            if (session.user.email.includes("admin")) session.user.role = "admin";
            return session;
        }
    }
}
