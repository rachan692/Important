
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AddForm from './pages/AddForm'

import Header from './components/Header';
import Routelayout from './components/Routelayout';
import { bloglice, blogslice, BlogSlice } from './redux/blogslice';
import Editform from './pages/Editform';


const App = () => {
console.log(blogslice);
  const router = createBrowserRouter([

    {
      path:'/',
      element:<Routelayout/>,
    children:[
 {
  index:true,
  element:<Home/>
 },
  {
    path:'about-page',
    element:<About/>
  },

  {
    path:'edit-form/:id',
    element:<Editform/>
  },

  {
    path:'add-form',
    element:<AddForm/>
  },
   <Outlet/>,
    
    ]
    },

  ]);
<App/>  
  return <RouterProvider router ={router}/>
  
}

export default App