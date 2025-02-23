import { createSlice } from "@reduxjs/toolkit"
const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const writeFromBasketToStorage = (basket) => {
    try {
        if (!basket || !Array.isArray(basket)) {
            console.error("Səbət məlumatı düzgün deyil:", basket);
            return;
        }
        localStorage.setItem("basket", JSON.stringify(basket));
    } catch (error) {
        console.error("localStorage yazılarkən xəta baş verdi:", error);
    }
    };



const initialState = {
    books: getBasketFromStorage(),
    drawer:false,
    totalAmount:0
}



export const basketSlice = createSlice(
    {
        name: "basket",
        initialState,
        reducers: {
            addToBasket: (state, action) => {
                console.log(action);
                JSON.parse(JSON.stringify(state.books))
                
                const findBook = state.books && state.books.find((book) =>String(book._id)===String(action.payload.id));

                console.log(state.books);
                
                if (findBook) {
                    state.books = state.books.map(book =>
                        String(book._id) === String(action.payload.id)
                            ? { ...book, count: book.count + action.payload.count }
                            : book
                    );
                } else {
                    state.books.push(action.payload);
                }
                console.log("Yenilənmiş Redux state:", JSON.parse(JSON.stringify(state.books)));
                writeFromBasketToStorage(state.books);
            },            
            setDrawer: (state) => {
                state.drawer = !state.drawer;
            },
            calculateBasket:(state,action)=>{
                state.totalAmount=0;
                state.books && state.books.map((book)=>{
                    state.totalAmount += book.price * book.count;
                })
            },
            removeFromBasket: (state, action) => {
                const updatedBasket = state.books.filter(book => book._id !== action.payload);
                state.books = updatedBasket;
                localStorage.setItem('basket', JSON.stringify(updatedBasket));
              }
        }
    }
)

export const { addToBasket,setDrawer,calculateBasket,removeFromBasket } = basketSlice.actions

export default basketSlice.reducer