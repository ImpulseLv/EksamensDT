import {createBrowserRouter} from "react-router-dom";
import {MyComponent} from "./Pages/Animals/AnimalList";
import React from "react";
import {AnimalEditForm} from "./Pages/Animals/AnimalEditForm";
import {NewAnimals} from "./Pages/Animals/NewAnimals";
import Login from "./Pages/LoginAndRegister/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "animals",
        element: <MyComponent/>,
    },
    {
        path: "animals/:id",
        element: <AnimalEditForm/>,
    },
    {
        path:"animals/newAnimal",
        element: <NewAnimals/>
    }
]);
