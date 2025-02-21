import { createSlice } from "@reduxjs/toolkit"
const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const writeFromBasketToStorage = (basket) => {
    try {
        localStorage.setItem("basket", JSON.stringify(basket)); 
      } catch (error) {
        console.error("localStorage yazılarkən səhv baş verdi:", error); 
      }
    };



const initialState = {
    books: getBasketFromStorage(),
    drawer:false
}



export const basketSlice = createSlice(
    {
        name: "basket",
        initialState,
        reducers: {
            addToBasket: (state, action) => {
                console.log(action);
                
                const findBook = state.books && state.books.find((book) =>book._id===action.payload.id);

                console.log(state.books);
                
                if (findBook) {
                  const extratedBook=  state.books.filter((book)=>book._id !==action.payload.id)
                  findBook.count+=action.payload.count
                  state.books=[...extratedBook,findBook]
                  writeFromBasketToStorage(state.books)
                   console.log(extratedBook)
                }
                else {
                    state.books = [...state.books, action.payload]
                    writeFromBasketToStorage(state.books)
                }
            },
            setDrawer:(state)=>{
                state.drawer=!state.drawer;
            }
        }
    }
)

export const { addToBasket,setDrawer } = basketSlice.actions

export default basketSlice.reducer