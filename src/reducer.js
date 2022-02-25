export const initialState = {
    basket: [
        {
            id:"3254354345",
            title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
            price:598.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        },
        {
            id:"3254354345",
            title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
            price:598.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        }
    ],
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_TO_BASKET':
            // Logic for Removing item from basket

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0) {
                // item exist in basket, remove it...
                newBasket.splice(index, 1);
            } else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`
                );
            }

            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;