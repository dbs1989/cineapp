import {} from "react";
import { MovieList } from "../components/MovieList";
//import "./Home.css"
export function Home(props){
    return (
        <>
        <h1>Filmes em Cartaz</h1>
        <MovieList/>
        </>
    )
}