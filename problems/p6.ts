import { prisma } from './prisma';

export const findAllMoviesThatAUserWatched = async (userId: number) => {
  const ratings = await prisma.starRating.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
    include: {
      movie: {},
    },
  });

  return ratings.map((rating) => rating.movie);
};
