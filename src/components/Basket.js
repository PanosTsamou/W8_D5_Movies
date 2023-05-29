import BasketItem from "./BasketItem";



const Basket = ({ basketItems, removeItFromYourBasket }) =>{
    const basketListItems = basketItems.map((movie) => {
        return(
               <BasketItem key= {movie.id} movie= { movie } removeItFromYourBasket= {removeItFromYourBasket}/> 
        );
    })

    return(
        <div>
            <h2>Your Shopping List</h2>
            <ul>
                {basketListItems}
            </ul>
            <h3>Total: {basketItems.reduce((total, item) => total+item.price, 0)}</h3>
        </div>
    );
}

export default Basket