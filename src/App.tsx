import {createBrowserRouter} from "react-router-dom";
import {MyComponent} from "./Pages/Animals/AnimalList";
import React from "react";
import {AnimalEditForm} from "./Pages/Animals/AnimalEditForm";
import {NewAnimals} from "./Pages/Animals/NewAnimals";
import Registration from "./Pages/LoginAndRegister/Registration";
import Login from "./Pages/LoginAndRegister/Login";
import MainPage from "./Pages/MainPage/Navbar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
      path: "registration",
      element: <Registration/>
    },
    {
        path: "login",
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


