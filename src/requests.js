const api_Key = "e90d1a84b12ffe7ade83626804da7024";
 const requests = {
     fetchTrending : `/trending/all/week?api_key=${api_Key}&language=en-US`,
     fetchNetflixOriginals : `/discover/tv?api_key=${api_Key}&with_networks=213`,
     fetchTopRated : `/movie/top_rated?api_key=${api_Key}&language=en-US`,
     fetchActionMovies : `/discover/movie?api_key=${api_Key}&with_genres=28`,
     fetchComedyMovies : `/discover/movie?api_key=${api_Key}&with_genres=35`,
     fetchHorrorMovies : `/discover/movie?api_key=${api_Key}&with_genres=27`,
     fetchRomanceMovies : `/discover/movie?api_key=${api_Key}&with_genres=10749`,
     fetchDocumentaries : `/discover/movie?api_key=${api_Key}&with_genres=99`,
 }

 export default requests