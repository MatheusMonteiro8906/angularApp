export interface Movie {
    nome: string,
    sinopse: string,
    rating: number,
    id?: number,
    contadorEmprestimos?: number,
    preco: Number,
    rented?: boolean,
}