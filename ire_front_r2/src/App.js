import Sidevar from './components/Sidebar/Sidebar'
import './mainStyles.css' 

import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import { Requisition, Dishes, Recipes, Ingredient, Groups } from './pages';

import MadeRouter from './components/MadeUpRouter/MadeRouter';

const mainRoutes = [
  {
      path : "/",
      name : "Requisición",
      icon : "documento.png",
      page : Requisition
  },
  {
      path : "/platillos",
      name : "Platillos",
      icon : "cuenco-arroz.png",
      page : Dishes
  },
  {
      path : "/recetas",
      name : "Recetas",
      icon : "recetas.png",
      page : Recipes
  },
  {
      path : "/ingredientes",
      name : "Ingredientes",
      icon : "bolsa-frutas.png",
      page : Ingredient
  },
  {
      path : "/grupos",
      name : "Grupos",
      icon : "grupo.png",
      page : Groups
  },
  
]

function App() {
  return (
    
    <MadeRouter routes={mainRoutes}/>
  );
}

export default App;