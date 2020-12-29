export const initialState = {
    Cart: [],
    user:null,

};

//Selector

export const getTotal = (Cart) => Cart?.reduce((amount,item) => parseInt(item.price) + amount  , 0); //Gets the sum of the products keeping initial price 0

const reducer = (state, action) => {
console.log(action);
    switch(action.type){

        case 'ADD_TO_CART':

            return {
                ...state,
                Cart: [...state.Cart, action.item],

            };
        
            
        case 'REMOVE_FROM_CART':
            const idx=state.Cart.findIndex(
                (CartItem) => CartItem.id===action.id
            );

            let newCart=[...state.Cart]

            if(idx>=0){
                newCart.splice(idx,1);
            }
            else{
                console.warn(`Can't remove product (ID:${action.id}) as it's not in Cart!`)
            }

                return {
                    ...state,
                    Cart:newCart
                }


            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                } 
                
            
            case "EMPTY_CART":
                return {
                    ...state,
                    Cart:[]
                }
                

            default:
                return state;

    }
};


export default reducer;