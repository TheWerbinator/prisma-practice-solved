import { prisma } from './prisma';

export const getAverageScoreForUser = async (userId: number) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: {
        equals: userId,
      },
    },
    include: {
      starRatings: {},
    },
  });

  const combinedScores = user.starRatings
    .map((rating) => rating.score)
    .reduce((a: number, b: number) => a + b);
  return combinedScores / user.starRatings.length;
};
