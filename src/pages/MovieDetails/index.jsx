import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getMovieInfo } from "../../services/api";
import { ArrowLeft} from "phosphor-react"
import {StyledDiv, Title, Synopsis,BgContainer,ReturnPage} from './style'
import {Loader} from '../../components/Loader'
export function MovieDetails(){
    const [movie, setMovie] = useState(null)
    const {id} = useParams("id");

    useEffect(()=>{
        const getDataApi = async ()=>{
            setMovie(await getMovieInfo(id))
        }
        getDataApi();
    }, [])
    return (
        <>
            <StyledDiv>
                {movie?.title ? (
                    <>
                        <ReturnPage><Link to="/"><ArrowLeft size={32} weight="bold" color={"#F76190"} /></Link></ReturnPage>
                        <BgContainer image={movie.images.background}></BgContainer>
                        <Title>{movie.title}</Title>
                        <Synopsis>{movie.synopsis}</Synopsis>
                    </>
                ):(
                    <Loader/>
                )} 
            </StyledDiv>
        </>
    )
}