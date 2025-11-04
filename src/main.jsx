import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx'
import Home from './Componants/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Componants/About.jsx';
import Skills from './Componants/Skills.jsx';
import Contact from './Componants/Contact.jsx';
import My_Profile from './Componants/My_Profile.jsx';



let root = createRoot(document.getElementById('root'));

let routers = createBrowserRouter([

  {
    path : '/',
    element : <Home/>,
  },

  {
    path : "/About",
    element : <About/>,
  },

  {
    path : "/Skills",
    element : <Skills/>,
  },
  
  {
    path : "/Contact",
    element : <My_Profile/>,
  }
  
])

root.render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)