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
        page: Requisition,
        defaultPath: "/listado",
        subPaths: [
            {
                path: "listado",
                name: "Listado de Requisiciones",
                page: ListRequisition
            },
            {
                path: "nuevo",
                name: "Nuevo Requisiciones",
                page: NewRequisition
            },
            {
                path: "actualizar",
                name: "Actualizar Platillo",
                page: UpdateRequisition
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
            {
                path: "actualizar",
                name: "Actualizar Platillo",
                page: UpdateDish
            },
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
            {
                path: "actualizar",
                name: "Actualizar Receta",
                page: UpdateRecipe
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
                name: "Nuevo Ingredientes",
                page: NewIngredient
            },
            {
                path: "actualizar",
                name: "Actualizar Ingredientes",
                page: UpdateIngredient
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
            {
                path: "actualizar",
                name: "Actualizar Grupos",
                page: UpdateGroup
            },
        ]
    },

]

export default RouterPath;