import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@ex.com' },
    update: {},
    create: {
      email: 'admin@ex.com',
      name: 'Adminaldo Souza',
      role: 'ADMIN',
      password: `${await bcrypt.hash('data123', 11)}`,
    },
  })

  const user = await prisma.user.upsert({
    where: { email: 'user@ex.com' },
    update: {},
    create: {
      email: 'user@ex.com',
      name: 'Useres Silva',
      role: 'USER',
      password: `${await bcrypt.hash('tada123', 11)}`,
    },
  })


  
  console.log({ admin, user })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })