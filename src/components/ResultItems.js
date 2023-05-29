import {useNavigate} from 'react-router-dom'

const ResultItems = ({ movie, addItToYourBasket }) => {

    let navigate = useNavigate()

    const handleOnClick =() =>{
        navigate(`/display/id=/${movie.id}`)

    }

    const handleAddBasketClick = () =>{
        addItToYourBasket(movie)
    }

    return (
        <li >
            <h3 onClick={handleOnClick}>{movie.title}</h3>
            <p>{movie.price}</p>
            <button onClick={handleAddBasketClick}>Add it to your Basket</button>
        </li>
    );
};

export default ResultItems