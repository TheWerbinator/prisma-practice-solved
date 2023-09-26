import { prisma } from './prisma';

export const getAverageUserAge = async () => {
  const users = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  return users._avg.age;
};
