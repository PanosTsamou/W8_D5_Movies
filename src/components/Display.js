import {useParams} from 'react-router-dom'


const Display = ({ movies }) => {
    let urlId = useParams()

    const movieForDisplay = movies.find(movie => movie.id === parseInt(urlId.id))
    return (
        <div>
            <h2>{movieForDisplay.title}</h2>
            <p>Prise {movieForDisplay.price}</p>
        </div>
    );
};

export default Display