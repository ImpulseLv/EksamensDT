import React, {useState} from "react";
import {Animal, AnimalStatuss} from "../../Types/Animal";
import {useNavigate} from "react-router-dom";
import {AbstractAnimalForm} from "./Components/AbstractAnimalForm";
import axios from "axios";
import moment from "moment";
const baseURL = "http://localhost:8080/animals";

export const NewAnimals: React.FC = () => {
    const navigate = useNavigate();

    const [newAnimalData, setNewAnimalData] = useState({
        id: baseURL.length+1,
        name: "",
        type: "",
        statuss: AnimalStatuss.free,
        date_of_birth: moment().format('YYYY-MM-DD'),
        gender: "",
        creation_date: new Date().getTime(),
        update_date: new Date().getTime(),
        owner_id: 1,
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleFormSubmit = (values: Animal) => {
        setIsLoading(true);
        console.log("Submitted values:", values);
        axios.post(baseURL, values)
            .then((response) => {
                console.log('Данные успешно отправлены на сервер:', response.data);
                navigate("/animals");
            })
            .catch((error) => {
                console.error('Ошибка при отправке данных:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <AbstractAnimalForm initialValues={newAnimalData} handleFormSubmit={handleFormSubmit} isLoading={isLoading} ></AbstractAnimalForm>
    );
};


