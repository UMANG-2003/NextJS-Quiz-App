import NextAuth from 'next-auth'

import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [ 
    GithubProvider({
        clientId:"Ov23liMCXJcL1qxBqhpU",
        clientSecret:"e2ea98c6f59a4a0e53db5cc1b07683648c92a5d5",
      }),
  ]
})

export {handler as GET , handler as POST}