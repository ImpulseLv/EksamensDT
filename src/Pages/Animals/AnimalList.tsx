import React, {useEffect, useState} from "react";
import { Animal } from "../../Types/Animal";
import {Link} from "react-router-dom";
import {AnimalStatusLabel} from "./Components/AnimalStatusLabel";
import DataTable from 'react-data-table-component';
import moment from "moment";
import {TableColumn} from "react-data-table-component/dist/src/DataTable/types";
import Button from '@mui/material/Button';
import axios from "axios";


const baseURL = "http://localhost:8080/animals"

const columns : TableColumn<Animal>[] = [
    {
        name: 'ID',
        cell: (row: Animal )=> row.id,
        sortable:true,
    },
    {
        name: 'Name',
        cell: (row : Animal)=> row.name,
        sortable:true,
    },
    {
        name: 'Type',
        cell: (row : Animal)=> row.type,
        sortable:true,
    },
    {
        name: 'Statuss',
        cell: (row : Animal)=> <AnimalStatusLabel status={ row.statuss } ></AnimalStatusLabel>,
        sortable:true,
    },
    {
        name: 'Date Of Birth',
        cell: (row :Animal)=> row.date_of_birth,
        sortable:true,
    },
    {
        name: 'Gender',
        cell: (row : Animal)=> row.gender,
        sortable:true,
    },
    {
        name: 'Creation Date',
        cell: (row : Animal)=> moment(row.creation_date).format('YYYY-MM-DD'),
        sortable:true,
    },
    {
        name: 'Update Date',
        cell: (row : Animal)=> moment(row.update_date).format('YYYY-MM-DD'),
        sortable:true,
    },
    {
        name: 'Owner Id',
        cell: (row: Animal )=> row.owner_id,
        sortable:true,
    },
    {
      name: '',
      cell: (row: Animal) => <Link to={'/animals/' + row.id}><Button variant="outlined">Edit</Button></Link>
    },
]

export function MyComponent() {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        axios.get<Animal[]>(baseURL)
            .then((response) => {
                console.log(response.data);
                setAnimals(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <form>
            <div className="animalListBlock">
                <h2 style={{ float: "left", margin: 2 }}>Animal List</h2>
                <Link to={'/animals/newAnimal/'} style={{ float: "right", margin: 2 }}><Button variant="outlined" size="small">Create</Button></Link>
                <DataTable<Animal>
                    columns={columns}
                    data={animals}
                />
            </div>
        </form>
    );
}
