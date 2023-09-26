import { prisma } from './prisma';

export const getAllMoviesWithAverageScoreOverN = async (n: number) => {
  const movies = await prisma.movie.findMany({
    include: {
      starRatings: {},
    },
  });

  const overNRatedMovies = movies
    .filter((movie) => {
      const averageRating =
        movie.starRatings
          .map((rating) => rating.score)
          .reduce((a: number, b: number) => a + b) / movie.starRatings.length;
      if (averageRating > n) {
        return movie;
      }
    })
    .map((movie) => {
      const movieObj = {
        id: movie.id,
        parentalRating: movie.parentalRating,
        releaseYear: movie.releaseYear,
        title: movie.title,
      };
      return movieObj;
    });

  return overNRatedMovies;
};
