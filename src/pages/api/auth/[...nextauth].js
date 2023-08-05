import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getByEmail, verifyPassword } from "../../../../public/services/users";
export const authOptions = {
  // Configure one or more authentication providers
  session:{
    jwt :"true"
},
  providers: [
    CredentialsProvider({
      async authorize({email , password}) {
        const user = getByEmail(email);
        if(!user){
            throw new Error("User not found");
        }
        const isValid = await verifyPassword(user.password,  password);
        if(!isValid){
            throw new Error("you have entered in-correct password");
        }
        return {email};
         
      }
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)