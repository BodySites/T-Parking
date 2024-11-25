import NextAuth from 'next-auth/next';
import { authOptions } from '@/config/authOptions';

/* eslint-disable */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
