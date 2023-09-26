import { prisma } from './prisma';

export const deleteAllUsersWithAgeUnderN = async (n: number) => {
  const users = await prisma.user.findMany({
    where: {
      age: {
        lt: n,
      },
    },
  });

  for (let i = 0; i < users.length; i++) {
    const deletedRatings = await prisma.starRating.deleteMany({
      where: {
        userId: users[i].id,
      },
    });
    const deleteUser = await prisma.user.delete({
      where: {
        username: users[i].username,
      },
    });
  }
};
