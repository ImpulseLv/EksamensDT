import React, {useEffect, useState} from "react";
import {Animal} from "../../Types/Animal";
import {useNavigate, useParams} from "react-router-dom";
import {AbstractAnimalForm} from "./Components/AbstractAnimalForm";
import axios from "axios";

export const AnimalEditForm: React.FC = () => {
    const baseURL = "http://localhost:8080/animals";
    const navigate = useNavigate();
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState<Animal | null>(null);


    const getAnimalById = (id: string) => {
        axios
            .get(`${baseURL}/${id}`)
            .then((response) => {
                setInitialValues(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при получении данных:", error);
            });
    };

    useEffect(() => {
        if (id) {
            getAnimalById(id);
        }
    }, [id]);
    const [isLoading, setIsLoading] = useState(false);
    const handleFormSubmit = (values: Animal) => {
        setIsLoading(true);
        console.log("Submitted values:", values);
        const idToUpdate = values.id!;
        axios
            .put(`${baseURL}/${idToUpdate}`, values)
            .then((response) => {
                console.log("Данные успешно отправлены на сервер:", response.data);
                navigate("/animals");
            })
            .catch((error) => {
                console.error("Ошибка при отправке данных:", error);
            })
            .finally(() => {
                setIsLoading(false);
        });
    };

    if (!initialValues) {
        return <div>Loading...</div>;
    }

    return (
        <AbstractAnimalForm initialValues={initialValues} handleFormSubmit={handleFormSubmit} isLoading={isLoading} />
    );
};


