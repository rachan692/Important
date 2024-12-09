


// const sd ='[]';
export const setPost = (post) =>{
localStorage.setItem('post',JSON.stringify(post));
}


export const getPost = () =>{
   const data =  localStorage.getItem('post');
return data=== null ? [] : JSON.parse(data);   
}