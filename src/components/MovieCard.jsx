import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MovieCard.css'
export function MovieCard({movie}){
    return(
        <Link to={"/movie-details/"+ movie.id} >
            <motion.article layout className="MovieCard">
                <img src={movie.images.poster} />
            </motion.article>
        </Link>
    )
}