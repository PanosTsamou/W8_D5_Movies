import {useNavigate} from 'react-router-dom'


const BasketItem = ({ movie, removeItFromYourBasket }) => {

    let navigate = useNavigate()

    const handleOnClick =() =>{
        navigate(`/display/id=/${movie.id}`)

    }

    const handleRemoveBasketClick = () =>{
        removeItFromYourBasket(movie.id)
    }

    return (
        <li >
        <h3 onClick={handleOnClick}>{movie.title}</h3>
        <p>{movie.price}</p>
        <button onClick={handleRemoveBasketClick}>Remove</button>
    </li>
    );
};


export default BasketItem