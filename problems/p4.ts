import { prisma } from './prisma';

export const getAllPG13Movies = async () => {
  const pg13Movies = await prisma.movie.findMany({
    where: {
      parentalRating: {
        equals: 'PG-13',
      },
    },
    select: {
      releaseYear: true,
      parentalRating: true,
    },
    orderBy: {
      releaseYear: 'desc',
    },
  });

  return pg13Movies;
};
