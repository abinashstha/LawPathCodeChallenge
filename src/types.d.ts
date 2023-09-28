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
    postcode: number;
    state: string;
}
