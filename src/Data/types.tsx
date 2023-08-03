export interface IFakturaItem {
    id: number;
    name : String;
}

export interface IFakturaPage {
    size: number;
    Fakturas: IFakturaItem[];
}

export type FakturaContextState = {
    page: IFakturaPage | null;
    size: number;
    fakturaId: number;
    setFakturaId: (fakturaId: number) => void;
};

export const contextDefaultValues: FakturaContextState = {
    page: null,
    size: 5,
    fakturaId:0,
    setFakturaId(fakturaId:number): void {},
};