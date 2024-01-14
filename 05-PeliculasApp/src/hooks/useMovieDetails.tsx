import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieResponse } from "../interfaces/movieInterface";
import { CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetailsState {
    cast: any[];
    isLoading: boolean;
    fullMovie?: MovieResponse
}

export const useMovieDetails = ( movieId: number ) => {

    const [movie, setMovie] = useState<MovieDetailsState>({
        isLoading: true,
        fullMovie: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = await movieDB.get<MovieResponse>(`${ movieId }`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [movieDetailsResponse, castPromiseResponse] = await Promise.all([
            movieDetailsPromise,
            castPromise
        ]);

        setMovie({
            cast: castPromiseResponse.data.cast,
            isLoading: false,
            fullMovie: movieDetailsResponse.data
        })
    }

    useEffect(() => {
        getMovieDetails();
    },[])

    return {
        ...movie
    }
}
