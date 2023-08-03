import React, {createContext, ReactNode, useEffect, useState,} from "react";
import {
    contextDefaultValues,
    IFakturaPage,
    FakturaContextState
} from "./types";
import FakturaRepository from "./FakturaRepository";

export const FakturaContext = createContext<FakturaContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const FakturaProvider = ({children}: Props) => {

    const [page, setPage] = useState<IFakturaPage | null>(contextDefaultValues.page);
    const [fakturaId, setFakturaId] = useState<number>(contextDefaultValues.fakturaId);
    const [size, setSize] = useState<number>(contextDefaultValues.size);
    const getPage = () => {
        //TODO remove before production
        console.debug(`Getting a new faktura page with`);

        FakturaRepository.getAllFaktura()
            .then(response => {
                setPage(response.data)
            })
            .catch((err) => console.error(err))
    }
    useEffect(() => {
        console.log("Hello world")
        //getPage()
    }, [])

    return (
        <FakturaContext.Provider
            value={{
                page,
                size,
                fakturaId,
                setFakturaId
            }}
        >
            {children}
        </FakturaContext.Provider>
    );
};
export default FakturaProvider;