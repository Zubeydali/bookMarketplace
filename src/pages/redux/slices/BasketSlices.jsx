import { createSlice } from "@reduxjs/toolkit"
const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
    console.log(writeFromBasketToStorage, "basket")
    console.log("aaaa");
    
}


const initialState = {
    books: getBasketFromStorage(),
}



export const basketSlice = createSlice(
    {
        name: "basket",
        initialState,
        reducers: {
            addToBasket: (state, action) => {
                console.log(action);
                
                const findBook = state.books && state.books.find((book) => book._id === action.payload._id);

                console.log(findBook);
                
                if (findBook) {
                  const extratedBook=  state.books.filter((book)=>book._id !==action._id)
                  findBook.count+=action.payload.count
                  state.books=[...extratedBook,findBook]
                  writeFromBasketToStorage(state.books)
                }
                else {
                    state.books = [...state.books, action.payload]
                    writeFromBasketToStorage(state.books)
                }
            }
        }
    }
)

export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer