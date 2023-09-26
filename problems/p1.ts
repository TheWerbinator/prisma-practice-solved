import { prisma } from './prisma';

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      username: 'asc',
    },
  });

  return users;
};
