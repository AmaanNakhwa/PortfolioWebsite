import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import Work from "./components/Work";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Outlet} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar /> 
        <Outlet />   
        <Footer />  
      </>
    ),
    children: [
      { path: '/', element: <Hero /> },
      { path: '/about', element: <About /> },
      { path: '/work', element: <Work /> },
      { path: '/contacts', element: <Contacts /> },
      
    ],
  },
])




 function App() {
   return (
     <div>
      <RouterProvider router={router} />
     </div>
    
   );
}

export default App;
