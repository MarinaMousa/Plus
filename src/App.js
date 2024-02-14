import './App.css';
import { Route ,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';



const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Header />} />
    <Route path='/contact' element={<Contact />} />
  </Route>
))

function App() {
  return (
    <div className="App">
    <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
