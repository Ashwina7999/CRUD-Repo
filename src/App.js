import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/navBar/NavBar';
import HomeController from './components/HomeController';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomeController page="home" />} />
          <Route path='/create' element={<HomeController page="create" />} />
          <Route path='/view' element={<HomeController page="view" />} />
          <Route path='/update' element={<HomeController page="update" />} />
          <Route path='/delete' element={<HomeController page="delete" />} />
          <Route path='/logout' element={<HomeController page="logout" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
