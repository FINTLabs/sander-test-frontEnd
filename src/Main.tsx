import React, {useContext, useEffect} from "react";
import {Button, Typography} from "@mui/material";
import CarTable from "./CarTable"
import {FakturaContext} from "./Data/FakturaContext";
const Main = () =>{
    const {page} = useContext(FakturaContext)
    useEffect(() => {
        console.log("fodmfomf")
    }, []);
    return (
        <div>
            <Typography>
                Hello world
            </Typography>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <CarTable/>
            <ul>
                {page?.Fakturas.map((row) =>
                    (<li>
                        {row.name}
                    </li>)
                )}
            </ul>
        </div>
    )
}
export default Main;