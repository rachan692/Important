import { configureStore } from "@reduxjs/toolkit";
import { blogslice } from "../redux/blogslice";



export const store = configureStore({
    reducer:{
        blogslice:blogslice.reducer
    }
})