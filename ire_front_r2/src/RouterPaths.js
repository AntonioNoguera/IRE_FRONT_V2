//Paths in all the app
import { Requisition, Dish, Recipe, Ingredient, Group } from './pages';

import { ListRequisition, NewRequisition, UpdateRequisition } from './pages';
import { ListDish, NewDish, UpdateDish } from './pages';
import { ListIngredient, NewIngredient, UpdateIngredient } from './pages';
import { ListRecipe, NewRecipe, UpdateRecipe } from './pages';
import { ListGroup, NewGroup, UpdateGroup } from './pages';

const RouterPath = [
    {
        path: "/",
        name: "Requisición",
        icon: "documento.png",
        page: Requisition
    },
    {
        path: "/platillos",
        name: "Platillos",
        icon: "cuenco-arroz.png",
        page: Dish,
        defaultPath: "/platillos/requisicion",
        children: [
            {
                path: "requisicion",
                name: "Listado de Requisiciones",
                page: ListDish
            },
            {
                path: "recetas",
                name: "Detalle Platillo",
                page: NewDish
            },
            {
                path: "ingredientes",
                name: "Detalle Platillo",
                page: UpdateDish
            },
        ]
    },
    {
        path: "/recetas",
        name: "Recetas",
        icon: "recetas.png",
        page: Recipe
    },
    {
        path: "/ingredientes",
        name: "Ingredientes",
        icon: "bolsa-frutas.png",
        page: Ingredient
    },
    {
        path: "/grupos",
        name: "Grupos",
        icon: "grupo.png",
        page: Group
    },

]

export default RouterPath;