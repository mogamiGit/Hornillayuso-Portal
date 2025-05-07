import { NextAuthConfig } from "next-auth"
import google from "next-auth/providers/google"

export const SESSION_STRATEGY = 'database' as 'jwt' | 'database'
export const FIELDS_USER_IS_ALLOWED_TO_CHANGE = ['name']

export const authConfig: NextAuthConfig = {
  theme: { logo: 'https://authjs.dev/img/logo-sm.png' },
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  providers: [
    google({
      allowDangerousEmailAccountLinking: true,
      id: 'google',
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      issuer: process.env.AUTH_ISSUER,
    }),
  ],
  session: {
    strategy: SESSION_STRATEGY,
  },
}
