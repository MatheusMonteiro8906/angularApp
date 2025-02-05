export interface Movie {
    nome: string,
    sinopse: string,
    rating: number,
    id?: number,
    rentCounter?: number,
    preco: Number,
    rented?: boolean,
}