
const API_KEY = "324c634f464dc053bc43bf6d8d1f9a3d"
//  process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:"Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:"Comedies",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:"Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:"Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv:{
        title:"Tv Movie",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}