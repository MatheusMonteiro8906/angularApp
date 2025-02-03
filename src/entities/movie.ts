export interface Movie {
    name: string,
    synopsis: string,
    rating: number,
    id?: number,
    rentCounter?: number,
    price: Number,
    rented?: boolean,
}