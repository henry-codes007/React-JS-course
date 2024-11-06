import { useEffect, useState } from "react";


const Moviespage = () => {
    const api_key = "a3ec5cef31325905723a0ad860da9c7e";
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    const requests = {
        fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
        fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_network=213`,
        fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
        fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
        fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
        fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
        fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
        fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`
    };
    
    const getTrendingMovies = async() => {
      setIsloading(true);
      try {
        const response = await fetch(requests.fetchTrending);
        const data = await response.json();
        // console.log(data.results);
        setTrendingMovies(data.results);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }      
    }

    useEffect(() => {
      console.log({trendingMovies})
    }, [trendingMovies]);

    useEffect(() => {
      getTrendingMovies();
    }, [])

  return (
    <div>
      {
        isLoading ? (
          <h1>Loading.....</h1>
        ) : (
          trendingMovies.length > 0 ?
        trendingMovies.map(movie => (
          <div key={movie.id}>
            <img src={`${baseUrl}${movie.backdrop_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        )) : (
          <h1>
            Oops!!, you have no movies
          </h1>
        )
        )
      }
      
    </div>
  )
}

export default Moviespage