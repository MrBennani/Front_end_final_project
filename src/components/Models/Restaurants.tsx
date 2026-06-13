export type Restaurants = {
  id: number
  titulo: string
  avaliacao: number
  tipo: string
  capa: string
  descricao: string
  destacado?: string[]
  cardapio: Prato[]
}

export type Prato = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}
