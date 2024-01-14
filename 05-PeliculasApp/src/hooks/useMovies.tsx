import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upComingMovies: Movie[];
}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
  });
    
  const getMovies = async() => {
    const nowPlayingPromise = await movieDB.get<MoviesResponse>("/now_playing")
    const popularPromise = await movieDB.get<MoviesResponse>("/popular")
    const topRatedPromise = await movieDB.get<MoviesResponse>("/top_rated")
    const upcomingPromise = await movieDB.get<MoviesResponse>("/upcoming")

    /* Ejecutamos todas las promesas simultáneamente
    si una falla, todas fallan */
    const responses = await Promise.all([ 
      nowPlayingPromise, 
      popularPromise, 
      topRatedPromise,
      upcomingPromise
    ]);

    setIsLoading(false);
    setMoviesState({
      nowPlayingMovies: responses[0].data.results,
      popularMovies: responses[1].data.results,
      topRatedMovies: responses[2].data.results,
      upComingMovies: responses[3].data.results
    })
  }

  useEffect(() => {
    getMovies();
  }, []);
  
  return {
    ...moviesState,
    isLoading
  }
}
