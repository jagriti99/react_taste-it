import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './components/Home';
import Recipes from './components/Recipes';
import AddNewRecipe from './components/AddNewRecipe';
import SeemoreRecipes from './components/SeemoreRecipes';

const App = () => {
  return (
    <BrowserRouter>       
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='Recipes' element={<Recipes />} />
          <Route path='/AddNewRecipe' element={<AddNewRecipe />}/>
          <Route path='/recipes/:id' element={<SeemoreRecipes />}/>
        </Route>
      </Routes>         
    </BrowserRouter>
  );
}

export default App;
