import { prisma } from './prisma';

export const findTheGrumpiestCriticId = async () => {
  const ratings = await prisma.starRating.groupBy({
    by: ['userId'],
    _avg: {
      score: true,
    },
  });

  return ratings.sort((a, b) => {
    if (b._avg.score && a._avg.score) {
      return a._avg.score - b._avg.score;
    }
    return 0;
  })[0].userId;
};

export const findTheNicestCriticId = async () => {
  const ratings = await prisma.starRating.groupBy({
    by: ['userId'],
    _avg: {
      score: true,
    },
  });

  return ratings.sort((a, b) => {
    if (b._avg.score && a._avg.score) {
      return b._avg.score - a._avg.score;
    }
    return 0;
  })[0].userId;
};
