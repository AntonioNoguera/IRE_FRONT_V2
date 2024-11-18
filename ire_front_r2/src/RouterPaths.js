//Paths in all the app
import { Requisition, Dish, Recipe, Ingredient, Group, SideDish } from './pages';

import { ListRequisition } from './pages';
import { ListDish, NewDish } from './pages';
import { ListIngredient, NewIngredient } from './pages';
import { ListRecipe, NewRecipe } from './pages';
import { ListGroup, NewGroup } from './pages';

import { ListSideDish, NewSideDish } from './pages';



const RouterPath = [
    {
        path: "/",
        name: "Requisición",
        icon: "documento.png",
        page: Requisition,
        defaultPath: "/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Requisiciones",
                page: ListRequisition
            } 
        ]
    },
 

    {
        path: "/recetas",
        name: "Recetas",
        icon: "recetas.png",
        page: Recipe,
        defaultPath: "/recetas/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Receta",
                page: ListRecipe
            },
            {
                path: "nuevo",
                name: "Nuevo Receta",
                page: NewRecipe
            }, 
        ]
    },

    {
        path: "/platillos",
        name: "Platillos",
        icon: "cuenco-arroz.png",
        page: Dish,
        defaultPath: "/platillos/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Platillos",
                page: ListDish
            },
            {
                path: "nuevo",
                name: "Nuevo Platillo",
                page: NewDish
            },
        ]
    },

    {
        path: "/ingredientes",
        name: "Ingredientes",
        icon: "bolsa-frutas.png",
        page: Ingredient,
        defaultPath: "/ingredientes/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Ingredientes",
                page: ListIngredient
            },
            {
                path: "nuevo",
                name: "Nuevo Ingrediente",
                page: NewIngredient
            },
        ]
    },

    {
        path: "/grupos",
        name: "Grupos",
        icon: "grupo.png",
        page: Group,
        defaultPath: "/grupos/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Grupos",
                page: ListGroup
            },
            {
                path: "nuevo",
                name: "Nuevo Grupos",
                page: NewGroup
            },
        ]
    },
    
    {
        path: "/complementos",
        name: "Complementos",
        icon: "bandeja.png",
        page: SideDish,
        defaultPath: "/complementos/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Complementos",
                page: ListSideDish
            },
            {
                path: "nuevo",
                name: "Nuevo Complemento",
                page: NewSideDish
            },
        ]
    },

]

export default RouterPath;