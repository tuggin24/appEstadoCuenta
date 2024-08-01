export interface Transaction {
  id: number;
  value: number;
  description: string;
  category: CategoryTransaction;
  type: TypeTransaction;
}

export interface CategoryTransaction {
  id: number;
  name: string;
}

export interface TypeTransaction {
  id: number;
  name: string;
}
