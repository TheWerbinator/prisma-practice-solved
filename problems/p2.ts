import { prisma } from './prisma';

export const getNYoungestUsers = async (howManyUsersToGrab: number) => {
  const nYoungestUsers = await prisma.user.findMany({
    take: howManyUsersToGrab,
    orderBy: {
      age: 'asc',
    },
  });

  return nYoungestUsers;
};
