import { NextAuthOptions } from 'next-auth';
// import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import envs from '@/config/environments';

// async function refreshToken(token: JWT): Promise<JWT> {
//   const response = await fetch(
//     process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/refresh',
//     {
//       method: 'POST',
//       headers: {
//         authorization: `Refresh ${token.backendTokens.refreshToken}`,
//       },
//     },
//   );

//   const data = await response.json();

//   return {
//     ...token,
//     backendTokens: data,
//   };
// }

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        code: {
          label: 'code',
          type: 'number',
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials?.code) return;

        const { code } = credentials;

        const response = await fetch(envs.baseApiUrl, {
          method: 'POST',
          body: JSON.stringify({
            login: code,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status == 401) {
          console.error(response.statusText);

          return;
        }

        const user = await response.json();

        return user;
      },
    }),
  ],
  callbacks: {
    // async jwt({ token, user }) {
    //   if (user) return { ...token, ...user };
    //   if (Date.now() < token.backendTokens.expiresIn) return token;
    //   return await refreshToken(token);
    // },
    // async session({ token, session }) {
    //   session.user = token.user;
    //   session.backendTokens = token.backendTokens;
    //   return session;
    // },
  },
};
