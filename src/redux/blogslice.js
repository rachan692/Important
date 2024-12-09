import { createSlice } from "@reduxjs/toolkit";
import { getPost, setPost } from "../Local/Localdata";


export const blogslice = createSlice({
name:'blogslice',
initialState: {
    post:getPost()
},
reducers:{
    
    addPost :(state,action)=>{
        state.post.push(action.payload);
        setPost(state.post);
        
    },
    updatePost :(state,action)=>{
        state.post = state.post.map((post)=>{
            return action.payload.id === post.id? action.payload:post
        })
        setPost(state.post);
        
    },
      removePost:(state,action)=>{
        state.post.splice(action.payload,1);
        setPost(state.post);
        
    }
}    
});
export const{addPost,updatePost,removePost} = blogslice.actions;
