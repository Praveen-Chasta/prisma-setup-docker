// This help us to connect with our tables 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data : {
        username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res)
}

insertUser("PC", "p@123", "P", "C")