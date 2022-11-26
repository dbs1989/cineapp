import axios from "axios";

const api = axios.create({
    baseURL: "http://10.10.32.8:8087"
})


export async function getMovies(){
    let response = await api.get("movies");
    return response.data;
}

export async function getMovieInfo(id){
    console.log(id)
    let response = await api.get("movies/"+id);
    console.log(response.data)
    return response.data;
}