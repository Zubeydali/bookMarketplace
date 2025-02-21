import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    books: [],
    selectedBook: {},
    loading: false,
    error: null
}



export const getAllBooks = createAsyncThunk("getAllBooks", async () => {
    const response = await axios.get("http://localhost:3000/products/");
    console.log(response.data,"data");

    return response.data;
    
})

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setSelectedBook:(state,action)=>{
            console.log("Selected Book in reducer:", action.payload);
state.selectedBook=action.payload
        }


    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.books = action.payload;
        })
        builder.addCase(getAllBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

    }

})

export const { setSelectedBook} = bookSlice.actions

export default bookSlice.reducer
