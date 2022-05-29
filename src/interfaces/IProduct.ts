export interface IProductRaw {
  id?: number;
  nome: string;
  quantidade: number;
  preco: number;
  descricao: string;
  avaliacao: number;
  vendedor: string;
}

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  seller: string;
  rate: number;
  price: number;
  count: number;
}

export type InsertProduct = Omit<IProduct, "rate">;
