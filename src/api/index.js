import axios from "axios";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=`

export const fetchMovies = async(search) =>{
try {
    const {data: {results}} = await axios.get(`${url}${search}&page=1&include_adult=false`);
    let modifiedData = results.map((data) => ({id:data.id, title:data.title, overview: data.overview, release_date:data.release_date, vote_average: data.vote_average, poster_path:data.poster_path}))
    console.log(results)
    return(modifiedData);
} catch (error) {
    
}
}

