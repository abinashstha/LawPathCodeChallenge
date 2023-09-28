interface IPostCodeSearchResponse {
    localities: ILocalities;
}

interface ILocalities {
    locality: ILocality[];
}

interface ILocality {
    location: string;
    postcode: number;
    state: string;
}

interface IFormValue {
    suburb: string;
    postcode: string;
    state: string;
}

interface IFieldValue {
    suburb: boolean | null;
    postcode: boolean | null;
    state: boolean | null;
}
