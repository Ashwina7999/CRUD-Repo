// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Delete from './components/Delete';
import Home from './components/Home';
import Update from './components/Update';
import View from './components/View';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create category="create" />} />
          <Route path='/view' element={<View category="view" />} />
          <Route path='/update' element={<Update category="update" />} />
          <Route path='/delete' element={<Delete category="delete" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
